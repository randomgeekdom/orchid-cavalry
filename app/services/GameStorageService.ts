import type PlayerCharacter from "~/models/PlayerCharacter";

export class GameStorageService {
    private readonly playerCharacterKey = "orchid_pc";


    SavePlayerCharacter(playerCharacter: PlayerCharacter): void {
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
    LoadPlayerCharacter(): PlayerCharacter | null {
        try {
            const serialized = localStorage.getItem(this.playerCharacterKey);

            if (!serialized) {
                return null;
            }

            return JSON.parse(serialized) as PlayerCharacter;
        } catch (error) {
            console.error("Failed to load game:", error);
            throw new Error("Could not load game from localStorage");
        }
    }
}
