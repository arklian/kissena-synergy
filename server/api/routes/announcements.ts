import { Router, Request, Response, NextFunction } from "express";
import {
  getAnnouncements,
  getAnnouncementCount,
  upsertAnnouncement,
  deleteAnnouncement,
} from "@functions/announcements";

const announcementsRouter = Router();

// Deals with the function type mismatch ("No overload matches this call")
const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => 
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

// GET: /announcement/latest/{entryCount}/{offset}
announcementsRouter.get("/latest/:entryCount/:offset", asyncHandler(getAnnouncements));

// GET: /events/count
announcementsRouter.get("/count", asyncHandler(getAnnouncementCount));

// POST: /announcement/post/{eventId}
announcementsRouter.post("/post/:eventId", asyncHandler(upsertAnnouncement));

// DELETE: /events/delete/{eventId}
announcementsRouter.delete("/delete/:eventId", asyncHandler(deleteAnnouncement));

export default announcementsRouter;