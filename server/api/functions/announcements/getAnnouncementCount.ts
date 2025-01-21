import { Request, Response } from "express";

require('dotenv').config();

const { Pool } = require('pg');

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});


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
