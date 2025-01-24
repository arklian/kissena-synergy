import { Request, Response } from "express";
import {pool} from "@api/functions/auth/auth";

// Used for POST: /resources/tags/upsert/{tagId}
export async function upsertTag(req: Request, res: Response) {
  const { tagId } = req.params;
  const { resources } = req.body;
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    
    // Update all specified resources with the new tag
    const query = `
      UPDATE resources 
      SET tag = $1 
      WHERE id = ANY($2)
      RETURNING *
    `;
    const result = await client.query(query, [tagId, resources]);
    
    await client.query('COMMIT');
    res.json(result.rows);
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error upserting tag:', error);
    res.status(500).json({ error: 'Failed to upsert tag' });
  } finally {
    client.release();
  }
}