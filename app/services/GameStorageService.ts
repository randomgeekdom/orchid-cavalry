import type Leader from "~/models/characters/Leader";
import type Faction from "~/models/factions/Faction";
import type Region from "~/models/world/Region";

export class GameStorageService {
    private readonly playerCharacterKey = "orchid_pc";


    SavePlayerCharacter(playerCharacter: Leader): void {
        try {
            const serialized = JSON.stringify(playerCharacter);
            localStorage.setItem(this.playerCharacterKey, serialized);
        } catch (error) {
            console.error("Failed to save game:", error);
            throw new Error("Could not save game to localStorage");
        }
    }

    /**
     * Loads the game state from localStorage
     * @returns The saved game object, or null if no save exists
     */
    LoadPlayerCharacter(): Leader | null {
        try {
            const serialized = localStorage.getItem(this.playerCharacterKey);

            if (!serialized) {
                return null;
            }

            return JSON.parse(serialized) as Leader;
        } catch (error) {
            console.error("Failed to load game:", error);
            throw new Error("Could not load game from localStorage");
        }
    }

    SaveFactions(factions: Faction[]): void {
        try {
            const serialized = JSON.stringify(factions);
            localStorage.setItem("orchid_factions", serialized);
        } catch (error) {
            console.error("Failed to save game:", error);
            throw new Error("Could not save game to localStorage");
        }
    }

    LoadFactions(): Faction[] {
        try {
            const serialized = localStorage.getItem("orchid_factions");

            if (!serialized) {
                return [];
            }

            return JSON.parse(serialized) as Faction[];
        } catch (error) {
            console.error("Failed to load game:", error);
            throw new Error("Could not load game from localStorage");
        }
    }

    SaveRegions(regions: Region[]): void {
        try {
            const serialized = JSON.stringify(regions);
            localStorage.setItem("orchid_regions", serialized);
        } catch (error) {
            console.error("Failed to save game:", error);
            throw new Error("Could not save game to localStorage");
        }
    }

    LoadRegions(): Region[] {
        try {
            const serialized = localStorage.getItem("orchid_regions");

            if (!serialized) {
                return [];
            }

            return JSON.parse(serialized) as Region[];
        } catch (error) {
            console.error("Failed to load game:", error);
            throw new Error("Could not load game from localStorage");
        }
    }
}
