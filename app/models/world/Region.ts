import type {Guid} from "guid-typescript";
import type City from "~/models/world/City";

export default interface Region{
    Id: Guid;
    Name: string;
    Description: string;
    Cities: City[];
}