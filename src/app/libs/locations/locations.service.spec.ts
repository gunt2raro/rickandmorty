import { TestBed } from "@angular/core/testing";
import { LoaderStore } from "../loader/loader.store";
import { LocationsService, LOCATIONS_QUERY } from "./locations.service";
import { ApolloTestingController, ApolloTestingModule } from "apollo-angular/testing";

describe('Locations Service', () => {
    let controller: ApolloTestingController;
    let service: LocationsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ApolloTestingModule.withClients(['rickandmorty'])],
            providers: [
                LocationsService,
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

    it("expect locations by search query", () => {
        service = TestBed.inject(LocationsService)
        service.locations(1, "space").subscribe(({ info, results }) => {
            expect(info?.count).toEqual(3)
            expect(info?.pages).toEqual(1)
            expect(results?.length).toEqual(3)
            expect(results[2].dimension).toEqual("Replacement Dimension")
        })

        const op = controller.expectOne(LOCATIONS_QUERY)

        expect(op.operation.clientName).toEqual('rickandmorty')
        expect(op.operation.variables.page).toEqual(1)

        op.flush({
            "data": {
                "locations": {
                    "info": {
                        "count": 3,
                        "pages": 1
                    },
                    "results": [
                        {
                            "id": "86",
                            "name": "Mount Space Everest",
                            "type": "Mount",
                            "dimension": "Replacement Dimension",
                            "created": "2020-05-02T13:34:45.332Z"
                        },
                        {
                            "id": "115",
                            "name": "Space",
                            "type": "Space",
                            "dimension": "Replacement Dimension",
                            "created": "2021-10-17T11:55:43.920Z"
                        },
                        {
                            "id": "118",
                            "name": "Space Tahoe",
                            "type": "",
                            "dimension": "Replacement Dimension",
                            "created": "2021-10-17T14:03:13.221Z"
                        }
                    ]
                }
            }
        })

        controller.verify();
    })
})