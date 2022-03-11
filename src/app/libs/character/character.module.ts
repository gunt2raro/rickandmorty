import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from "@angular/material/icon";
import { CharacterService } from "./character.service";
import { MatButtonModule } from "@angular/material/button";
import { CharacterContainer } from "./character.container";
import { CharacterPreviewComponent } from "./components/character-prev.component";

const uiComps = [
    CharacterContainer,
    CharacterPreviewComponent
]

@NgModule({
    imports: [
        CommonModule, 
        MatListModule,
        MatIconModule,
        MatButtonModule,
    ],
    providers: [CharacterService],
    declarations: [...uiComps],
    exports: [...uiComps]
})
export class CharacterModule { }