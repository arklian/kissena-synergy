import { Request, Response } from "express";

// Used for POST: /announcements/post
export function upsertAnnouncement(req: Request, res: Response) {
  console.log(req.body)
  res.send("posted");
}
