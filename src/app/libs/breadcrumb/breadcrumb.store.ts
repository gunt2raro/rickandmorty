import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { addToTree, changeTitle, changeTree } from "./breadcrumb.actions";

@Injectable({ providedIn: 'root' })
export class BreadCrumbStore {

    getTree$ = this.store.pipe(select('breadcrumb'))

    constructor(
        private store: Store<{ breadcrumb: any }>,
    ) { }

    changeTree(urlTree: any[]) {
        this.store.dispatch(changeTree({ urlTree }))
    }

    changeTitle(title: string) {
        this.store.dispatch(changeTitle({ title }))
    }

    addToTree(url: any) {
        this.store.dispatch(addToTree({ url }))
    }
}