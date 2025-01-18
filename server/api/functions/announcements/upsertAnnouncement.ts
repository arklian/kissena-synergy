import { Request, Response } from "express";

// Used for POST: /announcements/post/{postId}
export function upsertAnnouncement(req:Request, res:Response) { 
    res.send("posted")
}