import type {Guid} from "guid-typescript";

export default interface Character {
    id: Guid;
    FirstName: string;
    LastName: string;
    FailureCount: number;
    SuccessCount: number;
    Loyalty: number;
    Titles: string[];
}