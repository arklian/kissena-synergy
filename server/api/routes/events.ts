import { Router, Request, Response, NextFunction } from "express";
import {
  getEvents,
  getEventCount,
  upsertEvent,
  deleteEvent,
} from "@functions/events";

const eventsRouter = Router();

<<<<<<< HEAD
// GET: /events/{entryCount}/{offset}/{startDate}/{endDate (optional)}
// Gets n = <entryCount> events between the start & end dates (inclusive) after the k = <offset> events in the range
// If no end date is provided, fetches the first <entryCount> events on or after the startDate
eventsRouter.get("/:entryCount/:offset/:startDate/:endDate?", getEvents);

// GET: /events/count/{startDate}/{endDate}
// Retrieves the count of all events made between the start & end dates (inclusive)
eventsRouter.get("/count", getEventCount);
=======
// Deals with the function type mismatch ("No overload matches this call")
const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => 
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

// GET: /events/all/{entryCount}/{offset}
eventsRouter.get("/all/:entryCount/:offset", asyncHandler(getEvents));

// GET: /events/count
eventsRouter.get("/count", asyncHandler(getEventCount));
>>>>>>> f017ab1 (Creation of SQL queries)

// POST: /events/post/{eventId}
eventsRouter.post("/post/:eventId", asyncHandler(upsertEvent));

// DELETE: /events/delete/{eventId}
eventsRouter.delete("/delete/:eventId", asyncHandler(deleteEvent));

export default eventsRouter;