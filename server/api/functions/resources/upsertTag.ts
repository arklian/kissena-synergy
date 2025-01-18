import { Request, Response } from "express";

// Used for POST: /resources/tags/upsert/{tagId}
export function upsertTag(req:Request, res:Response) { 
    res.send("tag posted")
}