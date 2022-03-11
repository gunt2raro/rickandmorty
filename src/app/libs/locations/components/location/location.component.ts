import { Router } from "@angular/router";
import { Component, Input } from "@angular/core";
import { Location } from "../../models/location.model";
import { BreadCrumbStore } from "src/app/libs/breadcrumb/breadcrumb.store";

@Component({
    selector: 'rm-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss']
})
export class LocationComponent {

    @Input()
    location?: Location

    constructor(
        private router: Router,
        private breadCrumbStore: BreadCrumbStore
    ) { }

    characters(location: any) {
        this.router
            .navigate([
                'characters', 
                'l', 
                location.id
            ])
    }

}