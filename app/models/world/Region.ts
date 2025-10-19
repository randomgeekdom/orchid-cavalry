import type {Guid} from "guid-typescript";
import type City from "~/models/world/City";
import type FactionPopulation from "~/models/world/FactionPopulation";

export default interface Region{
    id: Guid;
    name: string;
    description: string;
    cities: City[];
    wildsFactionPopulation: FactionPopulation[];
}