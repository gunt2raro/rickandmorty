import { createAction, props } from "@ngrx/store";

export const toggle = createAction(
    '[Loader Component] Toggle'
)

export const specify = createAction(
    '[Loader Component] Specify ban',
    props<{ loading: boolean }>()
)