import { Request, Response } from "express";

// Used for GET: /events/count
export function getEventCount(req: Request, res: Response) {
  res.send(20);
}
