import { Router, Request, Response, NextFunction } from "express";
import {
  getEvents,
  getEventCount,
  upsertEvent,
  deleteEvent,
} from "@functions/events";

const eventsRouter = Router();

// Deals with the function type mismatch ("No overload matches this call")
const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => 
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

// GET: /events/all/{entryCount}/{offset}
eventsRouter.get("/all/:entryCount/:offset", asyncHandler(getEvents));

// GET: /events/count
eventsRouter.get("/count", asyncHandler(getEventCount));

// POST: /events/post/{eventId}
eventsRouter.post("/post/:eventId", asyncHandler(upsertEvent));

// DELETE: /events/delete/{eventId}
eventsRouter.delete("/delete/:eventId", asyncHandler(deleteEvent));

export default eventsRouter;