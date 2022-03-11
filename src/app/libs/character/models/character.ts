import { Location } from "../../locations/models/location.model"
import { Origin } from "./origin"

export interface Character {
    name: string
    image: string
    type: string
    gender: string
    species: string
    origin: Origin
    location: Location
    status: string
}