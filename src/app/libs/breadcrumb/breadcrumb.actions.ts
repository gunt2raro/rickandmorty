import { createAction, props } from "@ngrx/store";

export const changeTree = createAction(
    '[Breadcrumb Component] ChangeTree',
    props<{ urlTree: any[] }>()
);

export const changeTitle = createAction(
    '[Breadcrumb Component] ChangeTitle',
    props<{ title: string }>()
)
export const addToTree = createAction(
    '[Breadcrumb Component] AddToTree',
    props<{ url: any }>()
)