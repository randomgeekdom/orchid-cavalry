import type City from "~/models/world/City";

export default interface Region{
    Id: string;
    Name: string;
    Description: string;
    Cities: City[];
}