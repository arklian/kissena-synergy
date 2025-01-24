import { Request, Response } from "express";
import { pool } from "../auth/auth";

// Used for GET: /events/count/{startDate}/{endDate}
export async function getEventCount(req: Request, res: Response) {
  const client = await pool.connect();
  
  try {
    const result = await client.query('SELECT COUNT(*) FROM events');
    res.json({ count: parseInt(result.rows[0].count) });
  } catch (error) {
    console.error('Error counting events:', error);
    res.status(500).json({ error: 'Failed to count events' });
  } finally {
    client.release();
  }
}