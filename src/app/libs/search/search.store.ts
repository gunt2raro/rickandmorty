import { distinct, shareReplay, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { changeSearch } from "./search.actions";

@Injectable({ providedIn: 'root' })
export class SearchStore {

    searchText$ = this.store.pipe(
        select('searchText'),
    )

    constructor(private store: Store<{ searchText: string }>) { }

    changeSearchText(searchText: string) {
        this.store.dispatch(changeSearch({ searchText }))
    }
}