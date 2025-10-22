import type Region from "~/models/world/Region";
import {Guid} from "guid-typescript";
import type Faction from "~/models/factions/Faction";
import {FAMILY, FEMALE, MALE} from 'wikidata-person-names';
import {FactionType} from "~/models/factions/FactionType";
import type Leader from "~/models/characters/Leader";

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

    private GetRandomLeader(): Leader {
        return {
            Id: Guid.create(),
            FirstName: this.GetRandomFirstName(),
            LastName: this.GetRandomLastName(),
            AgeInMonths: (Math.floor(Math.random() * 60) + 20) * 12
        };
    }

    GenerateStartingFactions(): Faction[] {
        return [
            // Religious Factions - 4
            {
                Id: Guid.create(),
                Name: "The Clay Order",
                PrimaryType: FactionType.Religious,
                Description: "The Order of Clay is a religious faction that worships the Earth.",
                LeaderTitle: "High Paladin",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create(),
                Name: "The Ritualists",
                PrimaryType: FactionType.Religious,
                SecondaryType: FactionType.Military,
                Description: "The Ritualists are a militaristic religious faction that worships the gods.",
                LeaderTitle: "Holy Knight",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create(),
                Name: "The Spider Coven",
                PrimaryType: FactionType.Religious,
                SecondaryType: FactionType.Political,
                Description: "The Spider Coven believes in the power of the magicks and uses it to control the people.",
                LeaderTitle: "Sorcerex",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create(),
                Name: "The Temple of Sacrifice",
                PrimaryType: FactionType.Religious,
                Description: "The Temple of Sacrifice is a faction that believes in self-sacrifice as a means of devotion to the gods.",
                LeaderTitle: "Axe Lord",
                Leader: this.GetRandomLeader()
            },
            // Political Factions - 2
            {
                Id: Guid.create(),
                Name: "The Sapphire Ring",
                PrimaryType: FactionType.Political,
                SecondaryType: FactionType.Economic,
                Description: "A political group that attempts to control the world's economy.",
                LeaderTitle: "Master",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create(),
                Name: "The Holy Party",
                PrimaryType: FactionType.Political,
                SecondaryType: FactionType.Religious,
                Description: "A political group that uses faith as a means for control.",
                LeaderTitle: "Sceptre",
                Leader: this.GetRandomLeader()
            },
            // Military Factions - 5
            {
                Id: Guid.create(),
                Name: "The Pirates of Effigy",
                PrimaryType: FactionType.Military,
                Description: "A militaristic faction that seeks to conquer the world.",
                LeaderTitle: "Fleet Admiral",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create(),
                Name: "The Crimson Hoard",
                PrimaryType: FactionType.Military,
                SecondaryType: FactionType.Economic,
                Description: "An army that seeks wealth above all else.",
                LeaderTitle: "Red General",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create(),
                Name: "The Ruby Eye",
                PrimaryType: FactionType.Military,
                Description: "An army that believes in freedom for all to learn and live.",
                LeaderTitle: "Poet General",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create(),
                Name: "The Canopy",
                PrimaryType: FactionType.Military,
                SecondaryType: FactionType.Religious,
                Description: "An army with the backing of the gods.",
                LeaderTitle: "Commander",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create(),
                Name: "The Pax League",
                PrimaryType: FactionType.Military,
                SecondaryType: FactionType.Religious,
                Description: "A military faction that fights for peace by control.  Worships Pax, the god of Peace.",
                LeaderTitle: "High Defender",
                Leader: this.GetRandomLeader()
            },
            // Economic Factions - 2
            {
                Id: Guid.create(),
                Name: "Rufus Company",
                PrimaryType: FactionType.Economic,
                SecondaryType: FactionType.Military,
                Description: "A mercenary group that will take on any task for the right amount of money.",
                LeaderTitle: "Sergeant",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create(),
                Name: "The Raven Institution",
                PrimaryType: FactionType.Economic,
                SecondaryType: FactionType.Political,
                Description: "A money-grubbing organization with political aptitude.",
                LeaderTitle: "Socialite",
                Leader: this.GetRandomLeader()
            },
        ];
    }
}