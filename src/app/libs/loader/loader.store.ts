import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { specify, toggle } from "./loader.actions";

@Injectable({ providedIn: 'root' })
export class LoaderStore {

    loading$ = this.store.pipe(
        select('loading')
    )

    constructor(
        private store: Store<{ loading: boolean }>
    ) { }

    toogle() {
        this.store.dispatch(toggle())
    }

    specify(loading: boolean) {
        setTimeout(() => {
            this.store.dispatch(specify({ loading }))
        }, 0)
    }
}