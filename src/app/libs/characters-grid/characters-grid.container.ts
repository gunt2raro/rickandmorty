import { ActivatedRoute } from "@angular/router";
import { SearchStore } from "../search/search.store";
import { Component, ViewChild } from "@angular/core";
import { Character } from "../character/models/character";
import { MatPaginator } from "@angular/material/paginator";
import { BreadCrumbStore } from "../breadcrumb/breadcrumb.store";
import { catchError, filter, switchMap, tap } from "rxjs/operators";
import { BehaviorSubject, combineLatest, Observable, of } from "rxjs";
import { PaginatorResults } from "src/app/models/paginator-results.model";
import { CharactersByEpisodeResults, CharactersByLocationResults, CharactersGridService } from "./characters-grid.service";

@Component({
    selector: 'rm-characters-grird',
    templateUrl: './characters-grid.container.html',
    styleUrls: ['./characters-grid.container.scss']
})
export class CharactersGridContainer { 

    showPaginator$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

    paginatorLoader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
    searchText$ = this.searchStore.searchText$

    characters$: Observable<
        CharactersByEpisodeResults | 
        CharactersByLocationResults | 
        PaginatorResults<Character>
    > = this.route.paramMap.pipe(
        switchMap(params => {
            if (params.get('action') == 'e') {
                this.showPaginator$.next(false)
                return this.service
                    .charactersByEpisode(Number(params.get('id')))
                    .pipe(
                        tap((result) => {
                            this.breadCrumbStore
                                .changeTree([
                                    { name: "Home", url: [''] },
                                    { name: "Episodes", url: ['episodes'] },
                                    { name: result.episode, url: ['characters', 'e', params.get('id')] },
                                ])
                            this.breadCrumbStore
                                .changeTitle(`Characters by Episode ${result.episode} - ${result.name}`) 
                        })
                    )
            } else if(params.get('action') == 'l') {
                this.showPaginator$.next(false)
                return this.service
                    .charactersByLocation(Number(params.get('id')))
                    .pipe(
                        tap((result) => {
                            this.breadCrumbStore
                                .changeTree([
                                    { name: "Home", url: [''] },
                                    { name: "Location", url: ['locations'] },
                                    { name: result.name, url: ['characters', 'l', params.get('id')] },
                                ])
                            this.breadCrumbStore
                                .changeTitle(`Characters by Location: ${result.name}`)
                        }),
                    )
            }
            this.showPaginator$.next(true)
            this.breadCrumbStore
                .changeTree([
                    { name: "Home", url: [''] },
                    { name: "Characters", url: ['characters'] },
                ])
            this.breadCrumbStore
                .changeTitle(`Characters`)
            return combineLatest([
                this.paginatorLoader$,
                this.searchText$
            ]).pipe(
                filter((values) => (values[0] == true || values[1] != undefined)),
                switchMap((values) => { 
                    return this.service
                        .characters(
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
        })
    )

    @ViewChild('paginator', { static: false })
    paginator?: MatPaginator

    constructor(
        private route: ActivatedRoute,
        private searchStore: SearchStore,
        private service: CharactersGridService,
        private breadCrumbStore: BreadCrumbStore
    ) {

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