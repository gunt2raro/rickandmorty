import { SearchStore } from "../search/search.store";
import { Component, ViewChild } from "@angular/core";
import { LocationsService } from "./locations.service";
import { BehaviorSubject, combineLatest, of } from "rxjs";
import { MatPaginator } from "@angular/material/paginator";
import { catchError, filter, switchMap } from "rxjs/operators";
import { BreadCrumbStore } from "../breadcrumb/breadcrumb.store";

@Component({
    selector: 'rm-locations',
    templateUrl: './locations.container.html',
    styleUrls: ['./locations.container.scss']
})
export class LocationsContainer {
    
    paginatorLoader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
    searchText$ = this.searchStore.searchText$

    locations$ = combineLatest([
        this.paginatorLoader$,
        this.searchText$
    ]).pipe(
        filter((values) => (values[0] == true || values[1] != undefined)),
        switchMap((values) => {
            return this.service
                .locations(
                    (this.paginator?.pageIndex || 0) + 1,
                    values[1]
                )
                .pipe(
                    catchError((error) => {
                        return of({
                            info: null,
                            results: []
                        })
                    }),
                )
        })
    )

    @ViewChild('paginator', { static: false })
    paginator?: MatPaginator

    constructor(
        private searchStore: SearchStore,
        private service: LocationsService,
        private breadCrumbStore: BreadCrumbStore,
    ) {
        this.breadCrumbStore.changeTitle("Locations")
        this.breadCrumbStore
            .changeTree([
                { name: "Home", url: [''] },
                { name: "Locations", url: ['locations'] },
            ])
    }

    paginatorEventHandler(event: any, maxPages: number | undefined) {
        if(
            maxPages &&
            this.paginator && 
            this.paginator.pageIndex <= maxPages
        ) {
            this.paginatorLoader$.next(true)
        }
    }
}