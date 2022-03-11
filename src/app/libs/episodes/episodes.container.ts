import { EpisodesService } from "./episodes.service";
import { SearchStore } from "../search/search.store";
import { Component, ViewChild } from "@angular/core";
import { BehaviorSubject, combineLatest, of } from "rxjs";
import { MatPaginator } from "@angular/material/paginator";
import { catchError, filter, switchMap } from "rxjs/operators";
import { BreadCrumbStore } from "../breadcrumb/breadcrumb.store";

@Component({
    selector: 'rm-episodes',
    templateUrl: './episodes.container.html',
    styleUrls: ['./episodes.container.scss']
})
export class EpisodesContainer {

    paginatorLoader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
    searchText$ = this.searchStore.searchText$

    episodes$ = combineLatest([
        this.paginatorLoader$,
        this.searchText$
    ]).pipe(
        filter((values) => (values[0] == true || values[1] != undefined)),
        switchMap((values) => {
            return this.service
                .episodes(
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
        private service: EpisodesService,
        private searchStore: SearchStore,
        private breadCrumbStore: BreadCrumbStore,
    ) { 
        this.breadCrumbStore.changeTitle("Episodes") 
        this.breadCrumbStore
            .changeTree([
                { name: "Home", url: [''] },
                { name: "Episodes", url: ['episodes'] },
            ])
    }

    paginatorEventHandler(
        event: any, 
        maxPages: number | undefined
    ) {
        if(
            maxPages &&
            this.paginator && 
            this.paginator.pageIndex <= maxPages
        ) {
            this.paginatorLoader$.next(true)
        }
    }
}