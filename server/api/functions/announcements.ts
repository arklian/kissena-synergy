import { Request, Response } from "express";

// Used for POST: /announcements/post/{postId}
export function upsertAnnouncement(req:Request, res:Response) { 
    res.send("posted")
}

// Used for GET: /announcements/latest/{offset}/{entryCount}
export function getAnnouncements(req:Request, res:Response) {
    res.send("got the announcements!");
}

// Used for GET: /announcements/count
export function getAnnouncementCount(req:Request, res:Response) {
    res.send("0");
}

// Used for DELETE: /announcements/delete/{postId}
export function deleteAnnouncement(req:Request, res:Response) {
    res.send("deleted")
}
