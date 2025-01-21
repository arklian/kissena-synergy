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
// Used for POST: /resources/upsert/{resourceId}
export async function upsertResource(req: Request, res: Response) {
  const { resourceId } = req.params;
  const { name, details, tag } = req.body;
  const client = await pool.connect();
  
  try {
    const query = `
      INSERT INTO resources (id, name, details, tag)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (id) DO UPDATE
      SET name = $2, details = $3, tag = $4
      RETURNING *
    `;
    const values = [resourceId || crypto.randomUUID(), name, details, tag];
    const result = await client.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error upserting resource:', error);
    res.status(500).json({ error: 'Failed to upsert resource' });
  } finally {
    client.release();
  }
}
