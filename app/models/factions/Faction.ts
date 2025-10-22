import type {Guid} from "guid-typescript";
import type {FactionType} from "~/models/factions/FactionType";
import type Leader from "~/models/characters/Leader";

export default interface Faction {
    Id: Guid;
    Name: string;
    PrimaryType: FactionType;
    SecondaryType?: FactionType;
    Leader: Leader;
}