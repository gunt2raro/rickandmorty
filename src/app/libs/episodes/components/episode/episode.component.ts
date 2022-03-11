import { Router } from "@angular/router";
import { Component, Input } from "@angular/core";
import { Episode } from "../../models/episode.model";
import { BreadCrumbStore } from "src/app/libs/breadcrumb/breadcrumb.store";

@Component({
    selector: 'rm-episode',
    templateUrl: './episode.component.html',
    styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent { 
    @Input()
    episode?: Episode

    constructor(
        private router: Router,
        private breadCrumbStore: BreadCrumbStore
    ) {}
    
    characters(episode: any) {
        this.router
            .navigate([
                'characters', 
                'e', 
                episode.id
            ])
    }
}