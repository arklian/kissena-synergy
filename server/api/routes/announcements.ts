// Defines all /announcements routes
import { Router } from "express";
import {
  getAnnouncements,
  getAnnouncementCount,
  upsertAnnouncement,
  deleteAnnouncement,
} from "@functions/announcements";

const announcementsRouter = Router();

// GET: /announcements/latest/{offset}/{entryCount}
// Gets the <entryCount>th most recent announcements, offset by <offset>
announcementsRouter.get("/latest/:offset/:entryCount", getAnnouncements);

// GET: /announcements/count
// Retrieves the count of all announcements made
announcementsRouter.get("/count", getAnnouncementCount);

// POST: /announcements/post
// Upserts an announcement specified by the post id in the request body
announcementsRouter.post("/post", upsertAnnouncement);

// DELETE: /announcements/delete
// Deletes the announcement specified by the postId in the request body
announcementsRouter.delete("/delete", deleteAnnouncement);

export default announcementsRouter;
