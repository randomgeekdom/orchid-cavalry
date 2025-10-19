import type {Guid} from "guid-typescript";
import type FactionPopulation from "~/models/world/FactionPopulation";

export default interface City {
    id: Guid;
    name: string;
    population: FactionPopulation[];
}

