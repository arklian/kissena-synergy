import { KissenaTeam } from "./KissenaTeam";

interface EventData {
    title:string,
    location:string,
    description?:string,
    
    date:Date,
    startTime?:Date,
    endTime?:Date,

    team:KissenaTeam,
    partner?:string,

    learnMoreUrl?:string
}

export type { EventData };