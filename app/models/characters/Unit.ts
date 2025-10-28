import type UnitSkill from "~/models/characters/UnitSkill";

export default interface Unit {
    Id: string;
    FirstName: string;
    LastName: string;
    FailureCount: number;
    SuccessCount: number;
    Loyalty: number;
    AgeInMonths: number;
    Skills: UnitSkill[];
}