import { Request, Response } from "express";

// Used for POST: /events/post/{eventId}
export function upsertEvent(req:Request, res:Response) { 
    res.send("event posted")
}