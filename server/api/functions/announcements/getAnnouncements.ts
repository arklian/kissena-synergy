import { Request, Response } from "express";

// Used for GET: /announcements/latest/{offset}/{entryCount}
export function getAnnouncements(req:Request, res:Response) {
    res.send("got the announcements!");
}