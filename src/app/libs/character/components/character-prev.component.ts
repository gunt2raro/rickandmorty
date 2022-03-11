import { Router } from "@angular/router";
import { Character } from "../models/character";
import { Component, Input } from "@angular/core";
import { BreadCrumbStore } from "../../breadcrumb/breadcrumb.store";

@Component({
    selector: 'rm-character-preview',
    templateUrl: './character-prev.component.html',
    styleUrls: ['./character-prev.component.scss']
})
export class CharacterPreviewComponent {

    @Input()
    character?: Character

    constructor(
        private router: Router,
        private breadCrumbStore: BreadCrumbStore
    ) { }

    more(character: any) {
        this.router
            .navigate([
                'characters',
                character.id
            ])
        this.breadCrumbStore.addToTree({
            name: character.name,
            url: []
        })
    }
}