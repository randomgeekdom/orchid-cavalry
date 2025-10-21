import type Leader from "~/models/characters/Leader";

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
}
