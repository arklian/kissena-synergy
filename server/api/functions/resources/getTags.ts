import { Request, Response } from "express";

// Used for GET: /resources/tags
export function getTags(req:Request, res:Response) {
    res.send("got the tags!");
}