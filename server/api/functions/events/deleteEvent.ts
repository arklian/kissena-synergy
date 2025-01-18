import { Request, Response } from "express";

// Used for DELETE: /events/delete/{eventId}
export function deleteEvent(req: Request, res: Response) {
  res.send("deletedEvent");
}
