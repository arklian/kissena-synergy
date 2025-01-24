import { Request, Response } from "express";
import { pool } from "../auth/auth";

// Used for GET: /events/all/{entryCount}/{offset}
export async function getEvents(req: Request, res: Response) {
  const { entryCount, offset } = req.params;
  const client = await pool.connect();
  
  try {
    const query = `
      SELECT * FROM events 
      ORDER BY date DESC
      LIMIT $1 OFFSET $2
    `;
    const values = [entryCount, offset];
    const result = await client.query(query, values);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  } finally {
    client.release();
  }
}