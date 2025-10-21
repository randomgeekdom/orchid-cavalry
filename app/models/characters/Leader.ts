import type {Guid} from "guid-typescript";

export default interface Leader {
    Id: Guid;
    FirstName: string;
    LastName: string;
    AgeInMonths: number;
}