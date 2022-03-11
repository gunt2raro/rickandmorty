import { getEpisodes, goToCharacters } from "./episodes.actions"
import { Action, createReducer, on } from "@ngrx/store"

export interface EpisodesState {
    episodes: any
    selectedEpisode: any
}

export const initialState: EpisodesState = {
    episodes: [],
    selectedEpisode: null
};

const _episodesReducer = createReducer(
    initialState,
    on(getEpisodes, (state, { payload }) => ({ ...state, episodes: payload })),
    on(goToCharacters, (state, { episode }) => ({ ...state, selectedEpisode: episode }))
)

export function episodesReducer(state: any, action: Action) {
    return _episodesReducer(state, action)
}