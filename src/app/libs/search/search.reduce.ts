import { changeSearch } from "./search.actions"
import { Action, createReducer, on } from "@ngrx/store"

export const initialState = ""

const _searchReducer = createReducer(
    initialState,
    on(changeSearch, (state, { searchText }) => searchText)
)

export function searchReducer(state: string | undefined, action: Action) {
    return _searchReducer(state, action)
}