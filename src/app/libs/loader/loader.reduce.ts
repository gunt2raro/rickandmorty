import { specify, toggle } from "./loader.actions"
import { Action, createReducer, on } from "@ngrx/store"

export const initialState = true

const _loaderReducer = createReducer(
    initialState,
    on(toggle, (state) => !state),
    on(specify, (_, { loading }) => loading)
)

export function loaderReducer(state: boolean | undefined, action: Action) {
    return _loaderReducer(state, action)
}