import { Component } from '@angular/core'
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router'
import { CharacterService } from './character.service'
import { BreadCrumbStore } from '../breadcrumb/breadcrumb.store'

@Component({
    selector: 'rm-character',
    templateUrl: './character.container.html',
    styleUrls: ['./character.container.scss']
})
export class CharacterContainer {
    
    character$ = this.route.paramMap.pipe(
        switchMap(params => {
            return this.service
                .character(
                    Number(params.get('id'))
                )
        })
    )

    constructor( 
        private route: ActivatedRoute,
        private service: CharacterService,
        private breadCrumbStore: BreadCrumbStore, 
    ) { 
        this.breadCrumbStore.changeTitle("Character Information") 
    }
    
}