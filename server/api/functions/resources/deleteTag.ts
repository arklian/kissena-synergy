import { Request, Response } from "express";

// Used for DELETE: /resources/tags/delete/{tagId}
export function deleteTag(req:Request, res:Response) {
    res.send("deleted tag")
}