import { Request, Response } from "express";

// Used for GET: /events/count/{startDate}/{endDate}
export function getEventCount(req: Request, res: Response) {
  res.send("1");
}
