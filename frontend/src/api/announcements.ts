import axios from "axios";
import { HOSTNAME } from "./config";
import { AnnouncementData } from "@/types";
import { AnnouncementResponse } from "@/types/AnnouncementResponse";

export function getAnnouncementCount():Promise<number> {
    return axios.get<string>(`${HOSTNAME}/announcements/count`)
        .then(res => parseInt(res.data))
}

export function getAnnouncements(offset:number, entryCount:number):Promise<AnnouncementData[]> {
    const formatRaw = (item:AnnouncementResponse):AnnouncementData => {
        return {...item, datePosted: new Date(item.datePosted) }
    }

    return axios.get<AnnouncementResponse[]>(`${HOSTNAME}/announcements/latest/${offset}/${entryCount}`)
        .then(res => res.data)
        .then(res => res.map(item => formatRaw(item)))
}

export function postAnnouncement(title:string, description:string, redirectUrl:string, id:string=crypto.randomUUID()) {
    // return axios.post(`${HOSTNAME}/announcements/post`)
}