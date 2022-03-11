import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { BreadCrumbStore } from "./breadcrumb.store";

@Component({
    selector: 'rm-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadCrumbComponent {

    breadcrumb$ = this.store.getTree$

    constructor(
        private router: Router,
        private store: BreadCrumbStore
    ) { }

    clickOnTree(treeUrl: string[]) {
        this.router.navigate(treeUrl)
    }
}