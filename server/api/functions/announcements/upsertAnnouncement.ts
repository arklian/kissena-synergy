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

// Used for POST: /announcements/post
export async function upsertAnnouncement(req: Request, res: Response) {
  const { id, title, description, redirectUrl } = req.body;
  const client = await pool.connect();
  
  try {
    const query = `
      INSERT INTO announcements (id, title, date_posted, description, redirect_url)
      VALUES ($1, $2, CURRENT_DATE, $3, $4)
      ON CONFLICT (id) DO UPDATE
      SET title = $2, description = $3, redirect_url = $4
      RETURNING *
    `;
    const values = [id || crypto.randomUUID(), title, description, redirectUrl];
    const result = await client.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error upserting announcement:', error);
    res.status(500).json({ error: 'Failed to upsert announcement' });
  } finally {
    client.release();
  }
}