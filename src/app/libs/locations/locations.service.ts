import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { Apollo } from "apollo-angular";
import { Injectable } from "@angular/core";
import { finalize, map } from 'rxjs/operators';
import { Location } from './models/location.model';
import { LoaderStore } from '../loader/loader.store';
import { PaginatorInfo } from 'src/app/models/paginator-info.model';

export const LOCATIONS_QUERY = gql`
    query Locations(
        $page: Int!,
        $searchText: String
    ) {
        locations(
            page: $page,
            filter: {
                name: $searchText
            }
        ) {
            info {
                count
                pages
            }
            results {
                id
                name
                type
                dimension
                created
            }
        }
    }
`
@Injectable()
export class LocationsService {

    constructor(
        private apollo: Apollo,
        private loaderStore: LoaderStore
    ) { }

    locations(
        page: number,
        searchText?: string
    ): Observable<{
        info: PaginatorInfo,
        results: Location[]
    }> {
        this.loaderStore.specify(true)
        return this.apollo
            .use('rickandmorty')
            .query({
                query: LOCATIONS_QUERY,
                variables: {page, searchText}
            }).pipe(
                finalize(() => this.loaderStore.specify(false)),
                map(({ data }: any) => data['locations'])
            )
    }
}