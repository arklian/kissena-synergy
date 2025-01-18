// Defines all /announcements routes
import { Router } from "express";
import {
  getAnnouncements,
  getAnnouncementCount,
  upsertAnnouncement,
  deleteAnnouncement,
} from "../functions/announcements";

const announcementsRouter = Router();

// GET: /announcements/latest/{offset}/{entryCount}
// Gets the <entryCount>th most recent announcements, offset by <offset>
announcementsRouter.get("/latest/:offset/:entryCount", getAnnouncements);

// GET: /announcements/count
// Retrieves the count of all announcements made
announcementsRouter.get("/count", getAnnouncementCount);

// POST: /announcements/post/{postId}
// Upserts the post specified by the request id
// Uses the data provided by the request body.
announcementsRouter.post("/post/:postId", upsertAnnouncement);

// DELETE: /announcements/delete/{postId}
// Deletes the post specified by the postId
announcementsRouter.delete("/delete/:postId", deleteAnnouncement);

export default announcementsRouter;
