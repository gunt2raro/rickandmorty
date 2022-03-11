import { createAction, props } from "@ngrx/store";

export const goToCharacters = createAction(
    '[Episodes Component] Go to Characters from Episodes',
    props<{ episode: any }>()
)

export const getEpisodes = createAction(
    '[Episodes Component] Get Episodes',
    props<{ payload: any }>()
)