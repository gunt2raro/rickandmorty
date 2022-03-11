import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Episode } from "./models/episode.model";
import { goToCharacters } from "./episodes.actions";

@Injectable({ providedIn: 'root' })
export class EpisodesStore {
    
    constructor(private store: Store<{ episodes: any }>) { }

    goToCharacters(episode: Episode) {
        this.store.dispatch(goToCharacters({ episode }))
    }
}