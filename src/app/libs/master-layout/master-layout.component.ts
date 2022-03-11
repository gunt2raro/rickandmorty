import { Component } from "@angular/core";
import { LoaderStore } from "../loader/loader.store";

@Component({
    selector: 'rm-master-layout',
    templateUrl: './master-layout.component.html',
    styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent {

    loading$ = this.loaderStore.loading$

    constructor(
        private loaderStore: LoaderStore
    ) { }
}