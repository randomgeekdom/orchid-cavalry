import type {Guid} from "guid-typescript";
import type Locale from "~/models/world/Locale";

export default interface Region{
    Id: Guid;
    Name: string;
    Description: string;
    Locales: Locale[];
}