// Defines all /events routes
import { Router } from "express";
import { getEvents, getEventCount, upsertEvent, deleteEvent } from "../functions/events"

const eventsRouter = Router();

// GET: /events/all/{entryCount}/{offset}
// Gets n = <entryCount> events between the start & end dates (inclusive) after the k = <offset> events in the range
// where the start & end dates are provided in the request body
eventsRouter.get('/all/:entryCount/:offset', getEvents);

// GET: /events/count
// Retrieves the count of all events made between the start & end dates (inclusive)
// where the start & end dates are provided in the request body
eventsRouter.get('/count', getEventCount);

// POST: /events/post/{eventId}
// Upserts the post specified by the request id
// Uses the data provided by the request body.
eventsRouter.post('/post/:eventId', upsertEvent);

// DELETE: /events/delete/{eventId}
// Deletes the event specified by the eventId
eventsRouter.delete('/delete/:eventId', deleteEvent);

export default eventsRouter;