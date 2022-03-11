import gql from 'graphql-tag';
import { Observable } from "rxjs";
import { Apollo } from "apollo-angular";
import { Injectable } from "@angular/core";
import { Character } from './models/character';
import { finalize, map } from 'rxjs/operators';
import { LoaderStore } from '../loader/loader.store';

@Injectable()
export class CharacterService {

    constructor(
        private apollo: Apollo,
        private loaderStore: LoaderStore
    ) { }

    character(id: number): Observable<Character> {
        this.loaderStore.specify(true)
        return this.apollo
            .use('rickandmorty')
            .query({
                query: gql`
                    query CharacterById($id: ID!) {
                        character(
                            id: $id
                        ) {
                            id
                            name
                            image
                            type
                            status
                            gender
                            species 
                            origin {
                                id
                                name
                            }
                            location {
                                id
                                name
                            }
                            created
                        }
                    }
                `,
                variables: { id }
            })
            .pipe(
                finalize(() => this.loaderStore.specify(false)),
                map(({data}:any) => data['character'])
            )
    }
}