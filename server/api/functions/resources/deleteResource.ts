import { Request, Response } from "express";

// Used for DELETE: /resources/delete/{resourceId}
export function deleteResource(req:Request, res:Response) {
    res.send("deleted resource")
}