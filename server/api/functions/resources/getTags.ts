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

// Used for GET: /resources/tags
export async function getTags(req: Request, res: Response) {
  const client = await pool.connect();
  
  try {
    const query = `
      SELECT DISTINCT tag 
      FROM resources 
      WHERE tag IS NOT NULL
      ORDER BY tag ASC
    `;
    const result = await client.query(query);
    res.json(result.rows.map(row => row.tag));
  } catch (error) {
    console.error('Error fetching tags:', error);
    res.status(500).json({ error: 'Failed to fetch tags' });
  } finally {
    client.release();
  }
}
