// Defines all /events routes
import { Router } from "express";
import {
  getEvents,
  getEventCount,
  upsertEvent,
  deleteEvent,
} from "@functions/events";

const eventsRouter = Router();

// GET: /events/{entryCount}/{offset}/{startDate}/{endDate (optional)}
// Gets n = <entryCount> events between the start & end dates (inclusive) after the k = <offset> events in the range
// If no end date is provided, fetches the first <entryCount> events on or after the startDate
eventsRouter.get("/:entryCount/:offset/:startDate/:endDate?", getEvents);

// GET: /events/count/{startDate}/{endDate}
// Retrieves the count of all events made between the start & end dates (inclusive)
eventsRouter.get("/count", getEventCount);

// POST: /events/post/{eventId}
// Upserts the post specified by the request id
// Uses the data provided by the request body.
eventsRouter.post("/post/:eventId", upsertEvent);

// DELETE: /events/delete/{eventId}
// Deletes the event specified by the eventId
eventsRouter.delete("/delete/:eventId", deleteEvent);

export default eventsRouter;
