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

    private GetLocale(factions: Faction[], name: string) {
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
                Name: "Azure Mountains",
                Description: "A range of mountains in the north of the world.  The climate is cold with snow in the winter and ice in the summer.",
                Locales: [
                    this.GetLocale(factions, "Azure Peak"),
                    this.GetLocale(factions, "Basar"),
                    this.GetLocale(factions, "Carleton"),
                    this.GetLocale(factions, "Centralia"),
                ]
            },
            {
                Id: Guid.create(),
                Name: "Bluestone Valley",
                Description: "A valley at the base of the Azure Mountains.  The climate is temperate with a mix of forests and grasslands.",
                Locales: [
                    this.GetLocale(factions, "Angel's Pass"),
                    this.GetLocale(factions, "Bluestone"),
                    this.GetLocale(factions, "Coates"),
                    this.GetLocale(factions, "Chevington"),
                    this.GetLocale(factions, "Drakaina"),
                    this.GetLocale(factions, "Gypsum"),
                    this.GetLocale(factions, "Luna"),
                    this.GetLocale(factions, "Umberkin"),
                ]
            },
            {
                Id: Guid.create(),
                Name: "Phantasm Bay",
                Description: "A bay in the east of the world.  It is home to a large number of islands and is known for its rich fishing.",
                Locales: [
                    this.GetLocale(factions, "Psycharium Island"),
                    this.GetLocale(factions, "Neapolis"),
                ]
            },
            {
                Id: Guid.create(),
                Name: "Banishing Plains",
                Description: "A large grassland in the west of the world.  The climate is hot and dry with little rainfall.",
                Locales: [
                    this.GetLocale(factions, "Blackstone"),
                    this.GetLocale(factions, "Calvus"),
                    this.GetLocale(factions, "Castleton"),
                    this.GetLocale(factions, "Capazzo"),
                    this.GetLocale(factions, "Claudo"),
                    this.GetLocale(factions, "Gaea Vista"),
                    this.GetLocale(factions, "Gesta"),
                    this.GetLocale(factions, "Hartsfield"),
                    this.GetLocale(factions, "Kilgore"),
                    this.GetLocale(factions, "Verlin"),
                ]
            },
            {
                Id: Guid.create(),
                Name: "Gathering Forest",
                Description: "A large forest in the east of the world.",
                Locales: [
                    this.GetLocale(factions, "Ascension"),
                    this.GetLocale(factions, "Bassur"),
                    this.GetLocale(factions, "Slaughterville"),
                    this.GetLocale(factions, "Waking Wood"),
                ]
            },
        ];
    }

    GenerateStartingFactions(): Faction[]{
        // TODO: Implement faction generation -- left off here
        // There should be at least 6, one for each faction type (probably 2 of each)
        // Each faction should have a leader
        // Each faction should have a name
        // Each faction should have a type
        // Each faction should have a secondary type
        // Each faction should have a description
        return[];
    }
}