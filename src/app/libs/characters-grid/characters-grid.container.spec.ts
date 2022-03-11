import { of } from "rxjs"
import { DebugElement } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SearchStore } from "../search/search.store"
import { Character } from "../character/models/character"
import { MatButtonModule } from "@angular/material/button"
import { RouterTestingModule } from "@angular/router/testing"
import { CharacterModule } from "../character/character.module"
import { BreadCrumbStore } from "../breadcrumb/breadcrumb.store"
import { MatPaginatorModule } from "@angular/material/paginator"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { CharactersGridService } from "./characters-grid.service"
import { ActivatedRoute, convertToParamMap } from "@angular/router"
import { BreadCrumbModule } from "../breadcrumb/breadcrumb.module"
import { CharactersGridContainer } from "./characters-grid.container"

describe('Characters grid container', () => {

    let de: DebugElement
    let component: CharactersGridContainer
    let fixture: ComponentFixture<CharactersGridContainer>
    let characters: Character[] = [
        {
            name: "Rick Sanchez",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        },
        {
            name: "Morty",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        }
    ]
    let characters2: Character[] = [
        {
            name: "Rick Sanchez",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        },
        {
            name: "Morty",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        },
        {
            name: "Morty",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        }
    ]
    let characters3: Character[] = [
        {
            name: "Rick Sanchez",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        },
        {
            name: "Morty",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        },
        {
            name: "Morty",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        },
        {
            name: "Morty",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        }
    ]
    let characters4: Character[] = [
        {
            name: "Rick Sanchez test 4",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        },
        {
            name: "Morty",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        },
        {
            name: "Morty",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        },
        {
            name: "Morty",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            type: "",
            gender: "Male",
            species: "Human",
            origin: {
                name: "Earth"
            },
            location: {
                id: 1,
                name: "Earth"
            },
            status: "Alive",
        }
    ]
    let providers = [
        {
            provide: CharactersGridService,
            useValue: {
                characters: (page: number, searchText?: string) => {
                    if(searchText && searchText == 'queryText') {
                        return of({
                            info: {
                                count: 150,
                                pages: 7
                            },
                            results: characters4
                        })
                    }
                    return of({
                        info: {
                            count: 150,
                            pages: 7
                        },
                        results: characters3
                    })
                },
                charactersByLocation: (location: number) => of({
                    name: "Location test",
                    results: characters
                }),
                charactersByEpisode: (episode: number) => of({
                    name: "Episode test",
                    episode: "S1E10",
                    results: characters2
                })
            }
        },
        {
            provide: SearchStore,
            useValue: {}
        },
        {
            provide: BreadCrumbStore,
            useValue: {
                changeTree: (urlTree: any[]) => {},
                changeTitle: (title: string) => {},
            }
        },
    ]
    let declarations = [
        CharactersGridContainer
    ]
    let imports = [
        CommonModule,
        CharacterModule,
        MatButtonModule,
        BreadCrumbModule,
        MatPaginatorModule,
        RouterTestingModule,
    ]

    it('should render by episode', async () => {
        await TestBed.configureTestingModule({
            imports: imports,
            declarations: declarations,
            providers: [
                ... providers,
                {
                    provide: ActivatedRoute,
                    useValue: { paramMap: of(convertToParamMap({ id: 1, action: "e" })) }
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(CharactersGridContainer)
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();

        const nodes = de.nativeElement.querySelectorAll('rm-character-preview')
        expect(
            nodes.length
        ).toBe(3)
    })

    it('should render by location', async () => {
        await TestBed.configureTestingModule({
            imports: imports,
            declarations: declarations,
            providers: [
                ...providers,
                {
                    provide: ActivatedRoute,
                    useValue: { paramMap: of(convertToParamMap({ id: 1, action: "l" })) }
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(CharactersGridContainer)
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();

        const nodes = de.nativeElement.querySelectorAll('rm-character-preview')
        expect(
            nodes.length
        ).toBe(2)
    })

    it('should render all', async () => {
        await TestBed.configureTestingModule({
            imports: imports,
            declarations: declarations,
            providers: [
                ...providers,
                {
                    provide: ActivatedRoute,
                    useValue: { paramMap: of(convertToParamMap({})) }
                }
            ]
        }).compileComponents();
    
        fixture = TestBed.createComponent(CharactersGridContainer)
        component = fixture.componentInstance;
        de = fixture.debugElement;
        component.searchText$ = of("")
        fixture.detectChanges();
    
        const nodes = de.nativeElement.querySelectorAll('rm-character-preview')
        expect(
            nodes.length
        ).toBe(4)
    })

    it('should render by search query', async () => {
        await TestBed.configureTestingModule({
            imports: imports,
            declarations: declarations,
            providers: [
                ...providers,
                {
                    provide: ActivatedRoute,
                    useValue: { paramMap: of(convertToParamMap({})) }
                }
            ]
        }).compileComponents();
    
        fixture = TestBed.createComponent(CharactersGridContainer)
        component = fixture.componentInstance;
        de = fixture.debugElement;
        component.searchText$ = of("queryText")
        fixture.detectChanges();
        const nodes = de.nativeElement.querySelectorAll('rm-character-preview')
        expect(
            nodes.length
        ).toEqual(characters4.length)
    })
})

