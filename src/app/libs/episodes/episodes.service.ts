import gql from 'graphql-tag';
import { Observable } from "rxjs";
import { Apollo } from "apollo-angular";
import { Injectable } from "@angular/core";
import { finalize, map } from 'rxjs/operators';
import { Episode } from './models/episode.model';
import { LoaderStore } from '../loader/loader.store';
import { PaginatorInfo } from 'src/app/models/paginator-info.model';

export const EPISODES_QUERY = gql`
    query GetEpisodes( 
        $page: Int, 
        $searchText: String 
    ) {
        episodes( 
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
                episode
                created
                air_date
            }
        }
    }
`

@Injectable()
export class EpisodesService {

    constructor(
        private apollo: Apollo,
        private loaderStore: LoaderStore
    ) { }

    episodes(
        page: number,
        searchText?: string
    ): Observable<{
        info: PaginatorInfo,
        results: Episode[]
    }> {
        this.loaderStore.specify(true)
        return this.apollo
            .use('rickandmorty')
            .query({
                query: EPISODES_QUERY,
                variables: { page, searchText }
            }).pipe(
                finalize(() => this.loaderStore.specify(false)),
                map(({ data }: any) => data['episodes'])
            )
    }
}