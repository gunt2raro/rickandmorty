import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SearchStore } from "./search.store";
import { debounceTime, tap } from "rxjs/operators";

@Component({
    selector: 'rm-search',
    templateUrl: './search.container.html',
    styleUrls: ['./search.container.scss']
})
export class SearchContainer {

    searchForm: FormControl = new FormControl("")
    
    constructor(
        private searchStore: SearchStore
    ) {
        this.searchForm
            .valueChanges
            .pipe(
                debounceTime(300),
            )
            .subscribe((value) => {
                this.searchStore
                    .changeSearchText(value)
            })
    }

    clear() {
        
    }
}