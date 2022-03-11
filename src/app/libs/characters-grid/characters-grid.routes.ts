import { Routes } from "@angular/router";
import { CharacterContainer } from "../character/character.container";
import { CharactersGridContainer } from "./characters-grid.container";

export const CharacterGridRoutes: Routes = [
    { path: ':id', component: CharacterContainer },
    { path: '', component: CharactersGridContainer },
    { path: ':action/:id', component: CharactersGridContainer },
]