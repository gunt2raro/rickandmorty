import { TestBed } from "@angular/core/testing";
import { LoaderStore } from "../loader/loader.store";
import { EpisodesService, EPISODES_QUERY } from "./episodes.service";
import { ApolloTestingController, ApolloTestingModule } from "apollo-angular/testing";

describe('Episodes Service', () => {
    let controller: ApolloTestingController;
    let service: EpisodesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ApolloTestingModule.withClients(['rickandmorty'])],
            providers: [
                EpisodesService,
                {
                    provide: LoaderStore,
                    useValue: {
                        specify: (loading: boolean) => { }
                    }
                }
            ]
        })
        controller = TestBed.inject(ApolloTestingController);
    })

    afterEach(() => {
        controller.verify();
    });

    it("expect episodes by search query", () => {
        service = TestBed.inject(EpisodesService)
        service.episodes(1, "rick").subscribe(({ info, results }) => {
            expect(info?.count).toEqual(28)
            expect(info?.pages).toEqual(2)
            expect(results?.length).toEqual(20)
            expect(results[9].air_date).toEqual("August 6, 2017")
        })

        const op = controller.expectOne(EPISODES_QUERY)

        expect(op.operation.clientName).toEqual('rickandmorty')
        expect(op.operation.variables.searchText).toEqual("rick")

        op.flush({
            "data": {
                "episodes": {
                    "info": {
                        "count": 28,
                        "pages": 2
                    },
                    "results": [
                        {
                            "id": "6",
                            "name": "Rick Potion #9",
                            "episode": "S01E06",
                            "created": "2017-11-10T12:56:34.339Z",
                            "air_date": "January 27, 2014"
                        },
                        {
                            "id": "9",
                            "name": "Something Ricked This Way Comes",
                            "episode": "S01E09",
                            "created": "2017-11-10T12:56:34.645Z",
                            "air_date": "March 24, 2014"
                        },
                        {
                            "id": "10",
                            "name": "Close Rick-counters of the Rick Kind",
                            "episode": "S01E10",
                            "created": "2017-11-10T12:56:34.747Z",
                            "air_date": "April 7, 2014"
                        },
                        {
                            "id": "11",
                            "name": "Ricksy Business",
                            "episode": "S01E11",
                            "created": "2017-11-10T12:56:34.850Z",
                            "air_date": "April 14, 2014"
                        },
                        {
                            "id": "12",
                            "name": "A Rickle in Time",
                            "episode": "S02E01",
                            "created": "2017-11-10T12:56:34.953Z",
                            "air_date": "July 26, 2015"
                        },
                        {
                            "id": "15",
                            "name": "Total Rickall",
                            "episode": "S02E04",
                            "created": "2017-11-10T12:56:35.261Z",
                            "air_date": "August 16, 2015"
                        },
                        {
                            "id": "17",
                            "name": "The Ricks Must Be Crazy",
                            "episode": "S02E06",
                            "created": "2017-11-10T12:56:35.467Z",
                            "air_date": "August 30, 2015"
                        },
                        {
                            "id": "22",
                            "name": "The Rickshank Rickdemption",
                            "episode": "S03E01",
                            "created": "2017-11-10T12:56:35.983Z",
                            "air_date": "April 1, 2017"
                        },
                        {
                            "id": "23",
                            "name": "Rickmancing the Stone",
                            "episode": "S03E02",
                            "created": "2017-11-10T12:56:36.100Z",
                            "air_date": "July 30, 2017"
                        },
                        {
                            "id": "24",
                            "name": "Pickle Rick",
                            "episode": "S03E03",
                            "created": "2017-11-10T12:56:36.206Z",
                            "air_date": "August 6, 2017"
                        },
                        {
                            "id": "27",
                            "name": "Rest and Ricklaxation",
                            "episode": "S03E06",
                            "created": "2017-11-10T12:56:36.515Z",
                            "air_date": "August 27, 2017"
                        },
                        {
                            "id": "28",
                            "name": "The Ricklantis Mixup",
                            "episode": "S03E07",
                            "created": "2017-11-10T12:56:36.618Z",
                            "air_date": "September 10, 2017"
                        },
                        {
                            "id": "31",
                            "name": "The Rickchurian Mortydate",
                            "episode": "S03E10",
                            "created": "2017-11-10T12:56:36.929Z",
                            "air_date": "October 1, 2017"
                        },
                        {
                            "id": "32",
                            "name": "Edge of Tomorty: Rick, Die, Rickpeat",
                            "episode": "S04E01",
                            "created": "2020-04-30T06:52:04.495Z",
                            "air_date": "November 10, 2019"
                        },
                        {
                            "id": "35",
                            "name": "Claw and Hoarder: Special Ricktim's Morty",
                            "episode": "S04E04",
                            "created": "2020-04-30T06:52:04.498Z",
                            "air_date": "December 8, 2019"
                        },
                        {
                            "id": "36",
                            "name": "Rattlestar Ricklactica",
                            "episode": "S04E05",
                            "created": "2020-04-30T06:52:04.499Z",
                            "air_date": "December 15, 2019"
                        },
                        {
                            "id": "37",
                            "name": "Never Ricking Morty",
                            "episode": "S04E06",
                            "created": "2020-08-06T05:44:21.422Z",
                            "air_date": "May 3, 2020"
                        },
                        {
                            "id": "40",
                            "name": "Childrick of Mort",
                            "episode": "S04E09",
                            "created": "2020-08-06T05:51:25.458Z",
                            "air_date": "May 24, 2020"
                        },
                        {
                            "id": "41",
                            "name": "Star Mort: Rickturn of the Jerri",
                            "episode": "S04E10",
                            "created": "2020-08-06T05:51:52.079Z",
                            "air_date": "May 31, 2020"
                        },
                        {
                            "id": "42",
                            "name": "Mort Dinner Rick Andre",
                            "episode": "S05E01",
                            "created": "2021-10-15T17:00:24.099Z",
                            "air_date": "June 20, 2021"
                        }
                    ]
                }
            }
        })

        controller.verify();
    })
})