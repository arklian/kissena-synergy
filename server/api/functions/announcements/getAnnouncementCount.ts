import { Request, Response } from "express";

// Used for GET: /announcements/count
export function getAnnouncementCount(req: Request, res: Response) {
  res.send("0");
}
