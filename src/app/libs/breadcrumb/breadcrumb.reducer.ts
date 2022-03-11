import { Action, createReducer, on } from "@ngrx/store"
import { addToTree, changeTitle, changeTree } from "./breadcrumb.actions"

export const initialState = { 
    title: "Episodes", 
    urlTree: [{ name: "home", url: [""] }] 
}

const _breadCrumbReducer = createReducer(
    initialState,
    on(changeTree, (state, { urlTree }) => ({ 
        ...state, 
        urlTree: urlTree 
    })),
    on(changeTitle, (state, { title }) => ({ 
        ...state, 
        title: title 
    })),
    on(addToTree, (state, { url }) => ({ 
        ...state, 
        urlTree: state.urlTree.concat(url) 
    }))
)

export function breadCrumbReducer(state: any, action: Action) {
    return _breadCrumbReducer(state, action)
}