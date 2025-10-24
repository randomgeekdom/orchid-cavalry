import type Leader from "~/models/characters/Leader";

export default interface City {
    Id: string;
    Name: string;
    Leader: Leader;
    RulingFactionId?: string;
    Population: number;
}

