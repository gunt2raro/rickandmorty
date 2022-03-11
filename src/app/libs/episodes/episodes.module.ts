import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EpisodesRoutes } from "./episodes.routes";
import { EpisodesService } from "./episodes.service";
import { EpisodesContainer } from "./episodes.container";
import { MatButtonModule } from "@angular/material/button";
import {MatPaginatorModule} from '@angular/material/paginator';
import { EpisodeComponent } from "./components/episode/episode.component";

const uiComps = [
    EpisodeComponent,
    EpisodesContainer
]

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatPaginatorModule,
        RouterModule.forChild(EpisodesRoutes)
    ],
    providers: [EpisodesService],
    declarations: [...uiComps],
    exports: [...uiComps],
})
export class EpisodesModule { }