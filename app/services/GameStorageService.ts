import type Game from "~/models/Game";

export class GameStorageService {
    private readonly storageKey = "orchid_game_save";

    /**
     * Saves the game state to localStorage
     * @param game - The game object to save
     */

    SaveGame(game: Game): void {
        try {
            const serialized = JSON.stringify(game);
            localStorage.setItem(this.storageKey, serialized);
        } catch (error) {
            console.error("Failed to save game:", error);
            throw new Error("Could not save game to localStorage");
        }
    }

    /**
     * Loads the game state from localStorage
     * @returns The saved game object, or null if no save exists
     */
    LoadGame(): Game | null {
        try {
            const serialized = localStorage.getItem(this.storageKey);
            
            if (!serialized) {
                return null;
            }

            return JSON.parse(serialized) as Game;
        } catch (error) {
            console.error("Failed to load game:", error);
            throw new Error("Could not load game from localStorage");
        }
    }

    /**
     * Clears the saved game from localStorage
     */
    ClearSave(): void {
        localStorage.removeItem(this.storageKey);
    }

    /**
     * Checks if a saved game exists
     * @returns True if a save exists, false otherwise
     */
    HasSave(): boolean {
        return localStorage.getItem(this.storageKey) !== null;
    }
}
