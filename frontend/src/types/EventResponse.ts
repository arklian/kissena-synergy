export interface EventResponse {
    id:string,
    title:string,
    location:string,
    description?:string,
    
    date:string,
    startTime?:string,
    endTime?:string,

    team:string,
    partner?:string,

    learnMoreUrl?:string
}