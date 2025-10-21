import type {Guid} from "guid-typescript";
import type Leader from "~/models/characters/Leader";

export default interface Locale {
    Id: Guid;
    Name: string;
    Leader: Leader;
    RulingFactionId?: Guid;
    Population: number;
}

