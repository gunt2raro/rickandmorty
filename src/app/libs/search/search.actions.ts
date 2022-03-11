import { createAction, props } from "@ngrx/store";

export const changeSearch = createAction(
    '[Search Component] Change search',
    props<{ searchText: string }>()
)