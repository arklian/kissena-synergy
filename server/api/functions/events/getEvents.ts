import { Request, Response } from "express";

// Used for GET: /events/all/{entryCount}/{offset}
export function getEvents(req:Request, res:Response) {
    res.send("got the events!");
}