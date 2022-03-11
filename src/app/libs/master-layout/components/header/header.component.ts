import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { SearchStore } from "src/app/libs/search/search.store";

@Component({
    selector: 'rm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

    constructor(
        private router: Router,
        private searchStore: SearchStore
    ) {}

    location(nav: string[]) {
        this.searchStore.changeSearchText('')
        this.router.navigate(nav)
    }
}