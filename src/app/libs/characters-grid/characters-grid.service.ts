import gql from 'graphql-tag';
import { Observable } from "rxjs";
import { Apollo } from "apollo-angular";
import { Injectable } from "@angular/core";
import { finalize, map } from 'rxjs/operators';
import { LoaderStore } from '../loader/loader.store';
import { Character } from '../character/models/character';
import { PaginatorResults } from 'src/app/models/paginator-results.model';
import { PaginatorInfo } from 'src/app/models/paginator-info.model';

export interface CharactersByLocationResults {
    name: string
    info?: PaginatorInfo
    results: Character[]
}

export interface CharactersByEpisodeResults {
    name: string
    episode: string
    info?: PaginatorInfo
    results: Character[]
}

export const CHARACTERS_BY_EPISODE_QUERY = gql`
    query GetCharactersByEpisode(
        $episode: ID!
    ) {
        episode(id: $episode) {
            episode
            name
            characters {
                id
                name
                status
                image
            }
        }
    }
`

export const CHARACTERS_BY_LOCATION_QUERY = gql`
    query GetCharactersByLocation(
        $location: ID!
    ) {
        location(id: $location) {
            name
            residents {
                id
                name
                status
                image
            }
        }
    }
`

export const CHARACTERS_QUERY = gql`
    query Characters(
        $page: Int!,
        $searchText: String
    )  {
        characters(
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
                status
                image
            }
        }
    }
`
@Injectable()
export class CharactersGridService {

    constructor(
        private apollo: Apollo,
        private loaderStore: LoaderStore
    ) { }

    characters(
        page: number,
        searchText?: string
    ): Observable<PaginatorResults<Character>> {
        this.loaderStore.specify(true)
        return this.apollo
            .use('rickandmorty')
            .query({
                query: CHARACTERS_QUERY,
                variables: {page, searchText}
            }).pipe(
                finalize(() => this.loaderStore.specify(false)),
                map(({ data }: any) => data['characters'])
            )
    }

    charactersByLocation(
        location: number
    ): Observable<CharactersByLocationResults> {
        this.loaderStore.specify(true)
        return this.apollo
            .use('rickandmorty')
            .query({
                query: CHARACTERS_BY_LOCATION_QUERY,
                variables: { location }
            }).pipe(
                finalize(() => this.loaderStore.specify(false)),
                map(({ data }: any) => ({
                    "name": data['location']['name'],
                    "results": data['location']['residents']
                }))
            )
    }

    charactersByEpisode(
        episode: number
    ): Observable<CharactersByEpisodeResults> {
        this.loaderStore.specify(true)
        return this.apollo
            .use('rickandmorty')
            .query({
                query: CHARACTERS_BY_EPISODE_QUERY,
                variables: { episode }
            }).pipe(
                finalize(() => this.loaderStore.specify(false)),
                map(({ data }: any) => ({
                    name: data['episode']['name'],
                    episode: data['episode']['episode'],
                    results: data['episode']['characters']
                }))
            )
    }
}