import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { CharacterGridRoutes } from "./characters-grid.routes";
import { CharacterModule } from "../character/character.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { CharactersGridService } from "./characters-grid.service";
import { CharactersGridContainer } from "./characters-grid.container";

const uiComps = [
    CharactersGridContainer,
]

@NgModule({
    imports: [
        CommonModule,
        CharacterModule,
        MatButtonModule,
        MatPaginatorModule,
        RouterModule.forChild(CharacterGridRoutes)
    ],
    providers: [CharactersGridService],
    declarations: [...uiComps],
    exports: [...uiComps],
})
export class CharactersGridModule { }