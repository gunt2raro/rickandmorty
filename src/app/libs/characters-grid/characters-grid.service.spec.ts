import { TestBed } from '@angular/core/testing'
import {
    ApolloTestingModule,
    ApolloTestingController
} from 'apollo-angular/testing'
import { LoaderStore } from '../loader/loader.store'
import { CharactersGridService, CHARACTERS_BY_EPISODE_QUERY, CHARACTERS_BY_LOCATION_QUERY, CHARACTERS_QUERY } from './characters-grid.service'

describe('Characters Grid Service', () => {
    let controller: ApolloTestingController
    let service: CharactersGridService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ApolloTestingModule.withClients(['rickandmorty'])],
            providers: [
                CharactersGridService,
                {
                    provide: LoaderStore,
                    useValue: {
                        specify: (loading: boolean) => {}
                    }
                }
            ]
        })
        controller = TestBed.inject(ApolloTestingController);
    })

    afterEach(() => {
        controller.verify();
    });

    it("expect characters by search query", () => {
        service = TestBed.inject(CharactersGridService)
        service.characters(1, "").subscribe(({info, results}) => {
            expect(info?.count).toEqual(8)
            expect(info?.pages).toEqual(1)
            expect(results?.length).toEqual(8)
            expect(results[3].name).toEqual("High Pilot")
        })

        const op = controller.expectOne(CHARACTERS_QUERY)

        expect(op.operation.clientName).toEqual('rickandmorty')
        expect(op.operation.variables.page).toEqual(1)

        op.flush({
            "data": {
                "characters": {
                    "info": {
                        "count": 8,
                        "pages": 1
                    },
                    "results": [
                        {
                            "id": "515",
                            "name": "Caterpillar Mr. Goldenfold",
                            "type": "Caterpillar"
                        },
                        {
                            "id": "522",
                            "name": "Caterpillar Mr. Goldenfold’s Larvae",
                            "type": "Caterpillar"
                        },
                        {
                            "id": "590",
                            "name": "High Pilot",
                            "type": ""
                        },
                        {
                            "id": "591",
                            "name": "High Pilot",
                            "type": ""
                        },
                        {
                            "id": "766",
                            "name": "Pilgrim Alien",
                            "type": ""
                        },
                        {
                            "id": "776",
                            "name": "Gotron Pilot",
                            "type": "Anime"
                        },
                        {
                            "id": "777",
                            "name": "Gotron Pilot",
                            "type": "Anime"
                        },
                        {
                            "id": "778",
                            "name": "Gotron Pilot",
                            "type": "Anime"
                        }
                    ]
                }
            }
        })
        controller.verify();
    })

    it('expect characters by episode query', () => {
        
        service = TestBed.inject(CharactersGridService)

        service.charactersByEpisode(1).subscribe(({name, episode, results}) => {
            expect(name).toEqual("Pilot")
            expect(episode).toEqual("S01E01")
            expect(results?.length).toEqual(19)
            expect(results[1].name).toEqual("Morty Smith")
        })

        const op = controller.expectOne(CHARACTERS_BY_EPISODE_QUERY)

        expect(op.operation.clientName).toEqual('rickandmorty')
        expect(op.operation.variables.episode).toEqual(1)

        op.flush({
            "data": {
              "episode": {
                "episode": "S01E01",
                "name": "Pilot",
                "characters": [
                  {
                    "id": "1",
                    "name": "Rick Sanchez",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                  },
                  {
                    "id": "2",
                    "name": "Morty Smith",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                  },
                  {
                    "id": "35",
                    "name": "Bepisian",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/35.jpeg"
                  },
                  {
                    "id": "38",
                    "name": "Beth Smith",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/38.jpeg"
                  },
                  {
                    "id": "62",
                    "name": "Canklanker Thom",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/62.jpeg"
                  },
                  {
                    "id": "92",
                    "name": "Davin",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/92.jpeg"
                  },
                  {
                    "id": "127",
                    "name": "Frank Palicky",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/127.jpeg"
                  },
                  {
                    "id": "144",
                    "name": "Glenn",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/144.jpeg"
                  },
                  {
                    "id": "158",
                    "name": "Hookah Alien",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/158.jpeg"
                  },
                  {
                    "id": "175",
                    "name": "Jerry Smith",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/175.jpeg"
                  },
                  {
                    "id": "179",
                    "name": "Jessica",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/179.jpeg"
                  },
                  {
                    "id": "181",
                    "name": "Jessica's Friend",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/181.jpeg"
                  },
                  {
                    "id": "239",
                    "name": "Mr. Goldenfold",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/239.jpeg"
                  },
                  {
                    "id": "249",
                    "name": "Mrs. Sanchez",
                    "status": "unknown",
                    "image": "https://rickandmortyapi.com/api/character/avatar/249.jpeg"
                  },
                  {
                    "id": "271",
                    "name": "Principal Vagina",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/271.jpeg"
                  },
                  {
                    "id": "338",
                    "name": "Summer Smith",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/338.jpeg"
                  },
                  {
                    "id": "394",
                    "name": "Davin",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/394.jpeg"
                  },
                  {
                    "id": "395",
                    "name": "Greebybobe",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/395.jpeg"
                  },
                  {
                    "id": "435",
                    "name": "Pripudlian",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/435.jpeg"
                  }
                ]
              }
            }
        })

        controller.verify();
    })
    
    it('expect characters by location query', () => {
        
        service = TestBed.inject(CharactersGridService)

        service.charactersByLocation(1).subscribe(({name, results}) => {
            expect(name).toEqual("Earth (C-137)")
            expect(results?.length).toEqual(27)
            expect(results[5].status).toEqual("Dead")
        })

        const op = controller.expectOne(CHARACTERS_BY_LOCATION_QUERY)

        expect(op.operation.clientName).toEqual('rickandmorty')
        expect(op.operation.variables.location).toEqual(1)

        op.flush({
            "data": {
              "location": {
                "name": "Earth (C-137)",
                "residents": [
                  {
                    "id": "38",
                    "name": "Beth Smith",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/38.jpeg"
                  },
                  {
                    "id": "45",
                    "name": "Bill",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/45.jpeg"
                  },
                  {
                    "id": "71",
                    "name": "Conroy",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/71.jpeg"
                  },
                  {
                    "id": "82",
                    "name": "Cronenberg Rick",
                    "status": "unknown",
                    "image": "https://rickandmortyapi.com/api/character/avatar/82.jpeg"
                  },
                  {
                    "id": "83",
                    "name": "Cronenberg Morty",
                    "status": "unknown",
                    "image": "https://rickandmortyapi.com/api/character/avatar/83.jpeg"
                  },
                  {
                    "id": "92",
                    "name": "Davin",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/92.jpeg"
                  },
                  {
                    "id": "112",
                    "name": "Eric McMan",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/112.jpeg"
                  },
                  {
                    "id": "114",
                    "name": "Ethan",
                    "status": "unknown",
                    "image": "https://rickandmortyapi.com/api/character/avatar/114.jpeg"
                  },
                  {
                    "id": "116",
                    "name": "Evil Beth Clone",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/116.jpeg"
                  },
                  {
                    "id": "117",
                    "name": "Evil Jerry Clone",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/117.jpeg"
                  },
                  {
                    "id": "120",
                    "name": "Evil Summer Clone",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/120.jpeg"
                  },
                  {
                    "id": "127",
                    "name": "Frank Palicky",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/127.jpeg"
                  },
                  {
                    "id": "155",
                    "name": "Harold",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/155.jpeg"
                  },
                  {
                    "id": "169",
                    "name": "Jacob",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/169.jpeg"
                  },
                  {
                    "id": "175",
                    "name": "Jerry Smith",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/175.jpeg"
                  },
                  {
                    "id": "179",
                    "name": "Jessica",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/179.jpeg"
                  },
                  {
                    "id": "186",
                    "name": "Joyce Smith",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/186.jpeg"
                  },
                  {
                    "id": "201",
                    "name": "Leonard Smith",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/201.jpeg"
                  },
                  {
                    "id": "216",
                    "name": "MC Haps",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/216.jpeg"
                  },
                  {
                    "id": "239",
                    "name": "Mr. Goldenfold",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/239.jpeg"
                  },
                  {
                    "id": "271",
                    "name": "Principal Vagina",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/271.jpeg"
                  },
                  {
                    "id": "302",
                    "name": "Ruben",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/302.jpeg"
                  },
                  {
                    "id": "303",
                    "name": "Samantha",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/303.jpeg"
                  },
                  {
                    "id": "338",
                    "name": "Summer Smith",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/338.jpeg"
                  },
                  {
                    "id": "343",
                    "name": "Tammy Guetermann",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/343.jpeg"
                  },
                  {
                    "id": "356",
                    "name": "Tom Randolph",
                    "status": "Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/356.jpeg"
                  },
                  {
                    "id": "394",
                    "name": "Davin",
                    "status": "Dead",
                    "image": "https://rickandmortyapi.com/api/character/avatar/394.jpeg"
                  }
                ]
              }
            }
        })

        controller.verify();
    })
})