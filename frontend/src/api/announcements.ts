import axios from "axios";
import { HOSTNAME } from "./config";

export function getAnnouncementCount():Promise<number> {
    return axios.get<string>(`${HOSTNAME}/announcements/count`)
        .then(res => parseInt(res.data))
}