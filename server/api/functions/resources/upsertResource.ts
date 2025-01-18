import { Request, Response } from "express";

// Used for POST: /resources/upsert/{resourceId}
export function upsertResource(req: Request, res: Response) {
  res.send("resource posted");
}
