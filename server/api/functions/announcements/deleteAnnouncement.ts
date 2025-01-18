import { Request, Response } from "express";

// Used for DELETE: /announcements/delete/{postId}
export function deleteAnnouncement(req:Request, res:Response) {
    res.send("deleted")
}