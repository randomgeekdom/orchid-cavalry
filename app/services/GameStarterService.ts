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

    private GetCity(factions: Faction[], name: string) {
        return {
            Id: Guid.create().toString(),
            Name: name,
            Population: this.GetStartingPopulation(),
            Leader: {
                Id: Guid.create().toString(),
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
                Id: Guid.create().toString(),
                Name: "Azure Mountains",
                Description: "A range of mountains in the north of the world.  The climate is cold with snow in the winter and ice in the summer.",
                Cities: [
                    this.GetCity(factions, "Azure Peak"),
                    this.GetCity(factions, "Carleton"),
                    this.GetCity(factions, "Centralia"),
                    this.GetCity(factions, "Kasar"),
                ]
            },
            {
                Id: Guid.create().toString(),
                Name: "Bluestone Valley",
                Description: "A valley at the base of the Azure Mountains.  The climate is temperate with a mix of forests and grasslands.",
                Cities: [
                    this.GetCity(factions, "Angel's Pass"),
                    this.GetCity(factions, "Bluestone"),
                    this.GetCity(factions, "Coates"),
                    this.GetCity(factions, "Chevington"),
                    this.GetCity(factions, "Drakaina"),
                    this.GetCity(factions, "Gypsum"),
                    this.GetCity(factions, "Luna"),
                    this.GetCity(factions, "Umberkin"),
                ]
            },
            {
                Id: Guid.create().toString(),
                Name: "Phantasm Bay",
                Description: "A bay in the east of the world.  It is home to a large number of islands and is known for its rich fishing.",
                Cities: [
                    this.GetCity(factions, "Gatta"),
                    this.GetCity(factions, "Neapolis"),
                ]
            },
            {
                Id: Guid.create().toString(),
                Name: "Banishing Plains",
                Description: "A large grassland in the west of the world.  The climate is hot and dry with little rainfall.",
                Cities: [
                    this.GetCity(factions, "Blackstone"),
                    this.GetCity(factions, "Calvus"),
                    this.GetCity(factions, "Castleton"),
                    this.GetCity(factions, "Capazzo"),
                    this.GetCity(factions, "Claudo"),
                    this.GetCity(factions, "Gaea Vista"),
                    this.GetCity(factions, "Gesta"),
                    this.GetCity(factions, "Hartsfield"),
                    this.GetCity(factions, "Kilgore"),
                    this.GetCity(factions, "Verlin"),
                ]
            },
            {
                Id: Guid.create().toString(),
                Name: "Gathering Forest",
                Description: "A large forest in the east of the world.",
                Cities: [
                    this.GetCity(factions, "Ascension"),
                    this.GetCity(factions, "Bassur"),
                    this.GetCity(factions, "Slaughterville"),
                    this.GetCity(factions, "Waking Wood"),
                ]
            },
        ];
    }

    private GetRandomLeader(): Leader {
        return {
            Id: Guid.create().toString(),
            FirstName: this.GetRandomFirstName(),
            LastName: this.GetRandomLastName(),
            AgeInMonths: (Math.floor(Math.random() * 60) + 20) * 12
        };
    }

    GenerateStartingFactions(): Faction[] {
        return [
            // Religious Factions - 4
            {
                Id: Guid.create().toString(),
                Name: "The Clay Order",
                PrimaryType: FactionType.Religious,
                Description: "The Order of Clay is a religious faction that worships the Earth.",
                LeaderTitle: "High Paladin",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create().toString(),
                Name: "The Ritualists",
                PrimaryType: FactionType.Religious,
                SecondaryType: FactionType.Military,
                Description: "The Ritualists are a militaristic religious faction that worships the gods.",
                LeaderTitle: "Holy Knight",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create().toString(),
                Name: "The Spider Coven",
                PrimaryType: FactionType.Religious,
                SecondaryType: FactionType.Political,
                Description: "The Spider Coven believes in the power of the magicks and uses it to control the people.",
                LeaderTitle: "Sorcerex",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create().toString(),
                Name: "The Temple of Sacrifice",
                PrimaryType: FactionType.Religious,
                Description: "The Temple of Sacrifice is a faction that believes in self-sacrifice as a means of devotion to the gods.",
                LeaderTitle: "Axe Lord",
                Leader: this.GetRandomLeader()
            },
            // Political Factions - 2
            {
                Id: Guid.create().toString(),
                Name: "The Sapphire Ring",
                PrimaryType: FactionType.Political,
                SecondaryType: FactionType.Economic,
                Description: "A political group that attempts to control the world's economy.",
                LeaderTitle: "Master",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create().toString(),
                Name: "The Holy Party",
                PrimaryType: FactionType.Political,
                SecondaryType: FactionType.Religious,
                Description: "A political group that uses faith as a means for control.",
                LeaderTitle: "Sceptre",
                Leader: this.GetRandomLeader()
            },
            // Military Factions - 5
            {
                Id: Guid.create().toString(),
                Name: "The Pirates of Effigy",
                PrimaryType: FactionType.Military,
                Description: "A militaristic faction that seeks to conquer the world.",
                LeaderTitle: "Fleet Admiral",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create().toString(),
                Name: "The Crimson Hoard",
                PrimaryType: FactionType.Military,
                SecondaryType: FactionType.Economic,
                Description: "An army that seeks wealth above all else.",
                LeaderTitle: "Red General",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create().toString(),
                Name: "The Ruby Eye",
                PrimaryType: FactionType.Military,
                Description: "An army that believes in freedom for all to learn and live.",
                LeaderTitle: "Poet General",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create().toString(),
                Name: "The Canopy",
                PrimaryType: FactionType.Military,
                SecondaryType: FactionType.Religious,
                Description: "An army with the backing of the gods.",
                LeaderTitle: "Commander",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create().toString(),
                Name: "The Pax League",
                PrimaryType: FactionType.Military,
                SecondaryType: FactionType.Religious,
                Description: "A military faction that fights for peace by control.  Worships Pax, the god of Peace.",
                LeaderTitle: "High Defender",
                Leader: this.GetRandomLeader()
            },
            // Economic Factions - 2
            {
                Id: Guid.create().toString(),
                Name: "Rufus Company",
                PrimaryType: FactionType.Economic,
                SecondaryType: FactionType.Military,
                Description: "A mercenary group that will take on any task for the right amount of money.",
                LeaderTitle: "Sergeant",
                Leader: this.GetRandomLeader()
            },
            {
                Id: Guid.create().toString(),
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