import { Request, Response } from "express";

// Used for GET: /resources
export function getResources(req: Request, res: Response) {
  res.send("got the resources!");
}
