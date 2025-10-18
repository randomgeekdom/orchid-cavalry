import type Character from "~/models/Character";

export class RankService {
    /**
     * Calculates and returns a rank based on two numeric inputs
     * @returns A string representing the calculated rank
     * @param character The character to calculate the rank for
     */
    GetRank(character: Character): string {
        const rankValue = 2 * character.SuccessCount + character.FailureCount;

        if (rankValue <= 0) {
            return "Recruit";
        } else if (rankValue < 10) {
            return "Private";
        } else if (rankValue < 20) {
            return "Corporal";
        } else if (rankValue < 30) {
            return "Sergeant";
        } else if (rankValue < 40) {
            return "Lieutenant";
        } else if (rankValue < 50) {
            return "Commander";
        } else if (rankValue < 60) {
            return "Captain";
        } else if (rankValue < 70) {
            return "Major";
        } else if (rankValue < 80) {
            return "Colonel";
        } else {
            return "General";
        }
    }
}
