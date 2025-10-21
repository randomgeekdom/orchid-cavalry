import type Region from "~/models/world/Region";
import {Guid} from "guid-typescript";
import type Faction from "~/models/factions/Faction";
import {MALE, FEMALE, FAMILY} from 'wikidata-person-names';

export default class GameStarterService {

    private GetStartingPopulation(): number {
        return Math.floor(Math.random() * 100) + 10;
    }

    private GetRandomFirstName(): string {
        const names = [...MALE, ...FEMALE];
        return names[Math.floor(Math.random() * names.length)] ?? "Sam";
    }

    private GetRandomLastName(): string {
        const names = [...FAMILY];
        return names[Math.floor(Math.random() * names.length)] ?? "Johnson";
    }

    private GetLocale(factions: Faction[], name: string){
        return {
            Id: Guid.create(),
            Name: name,
            Population: this.GetStartingPopulation(),
            Leader: {
                Id: Guid.create(),
                FirstName: this.GetRandomFirstName(),
                LastName: this.GetRandomLastName(),
                AgeInMonths: (Math.floor(Math.random() * 60) + 20) * 12
            },
            RulingFactionId: factions[Math.floor(Math.random() * factions.length)]?.Id
        };
    }

    GenerateStartingRegions(factions: Faction[]): Region[] {
        return [
            {
                Id: Guid.create(),
                Name: "Bluestone Valley",
                Description: "A valley at the base of the Azure Mountains.  The climate is temperate with a mix of forests and grasslands.",
                Locales: [
                    this.GetLocale(factions,"Angel's Pass"),
                    this.GetLocale(factions,"Bluestone"),
                    this.GetLocale(factions,"Coates"),
                    this.GetLocale(factions,"Chevington"),
                    this.GetLocale(factions,"Drakaina"),
                    this.GetLocale(factions,"Gypsum"),
                    this.GetLocale(factions,"Luna"),
                    this.GetLocale(factions,"Umberkin"),
                ]
            }
        ];
    }
}