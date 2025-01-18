// Defines all /events routes
import { Router } from "express";
import { getResources, getTags, upsertResource, upsertTag, deleteResource, deleteTag } from "../functions/resources"

const resourcesRouter = Router();

// GET: /resources
// Retrieves a list of all resource information
resourcesRouter.get('/', getResources);

// POST: /resources/upsert/{resourceId}
// Adds or updates a resource
resourcesRouter.post('/upsert/:resourceId', upsertResource);

// DELETE: /resources/delete/{resourceId}
// Deletes a specific resource by its ID
resourcesRouter.delete('/delete/:resourceId', deleteResource);

// Setup routes for /resources/tags

const tagsRouter = Router();

// GET: /resources/tags
// Retrieves a list of all the tags available that can be used to categorize resources
tagsRouter.get('/', getTags);

// POST: /resources/tags/upsert/{tagId}
// Adds or updates a tag
tagsRouter.post('/upsert/:tagId', upsertTag);

// DELETE: /resources/tags/delete/{tagId}
// Deletes a specific tag by its ID
tagsRouter.delete('/delete/:tagId', deleteTag);

resourcesRouter.use('/tags', tagsRouter);

export default resourcesRouter;