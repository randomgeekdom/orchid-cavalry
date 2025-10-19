import type {Guid} from "guid-typescript";
import type {FactionType} from "~/models/factions/FactionType";

export default interface Faction {
    id: Guid;
    name: string;
    type: FactionType;
}