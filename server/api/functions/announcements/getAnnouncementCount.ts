import { Request, Response } from "express";
import {pool} from "@api/functions/auth/auth";

// Used for GET: /announcements/count
export async function getAnnouncementCount(req: Request, res: Response) {
  const client = await pool.connect();
  
  try {
    const result = await client.query('SELECT COUNT(*) FROM announcements');
    res.json({ count: parseInt(result.rows[0].count) });
  } catch (error) {
    console.error('Error counting announcements:', error);
    res.status(500).json({ error: 'Failed to count announcements' });
  } finally {
    client.release();
  }
}
