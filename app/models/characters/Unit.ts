import type {Guid} from "guid-typescript";

export default interface Unit {
    Id: Guid;
    FirstName: string;
    LastName: string;
    FailureCount: number;
    SuccessCount: number;
    Loyalty: number;
}