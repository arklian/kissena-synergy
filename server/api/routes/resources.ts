import { Router, Request, Response, NextFunction } from "express";
import {
  getResources,
  getTags,
  upsertResource,
  upsertTag,
  deleteResource,
  deleteTag,
} from "@functions/resources";

const resourcesRouter = Router();

// Deals with the function type mismatch ("No overload matches this call")
const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => 
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

// GET: /resources
resourcesRouter.get("/", asyncHandler(getResources));

// POST: /resources/upsert/{resourceId}
resourcesRouter.post("/upsert/:resourceId", asyncHandler(upsertResource));

// DELETE: /resources/delete/{resourceId}
resourcesRouter.delete("/delete/:resourceId", asyncHandler(deleteResource));

// Setup routes for /resources/tags
const tagsRouter = Router();

// GET: /resources/tags
tagsRouter.get("/", asyncHandler(getTags));

// POST: /resources/tags/upsert/{tagId}
tagsRouter.post("/upsert/:tagId", asyncHandler(upsertTag));

// DELETE: /resources/tags/delete/{tagId}
tagsRouter.delete("/delete/:tagId", asyncHandler(deleteTag));

resourcesRouter.use("/tags", tagsRouter);

export default resourcesRouter;