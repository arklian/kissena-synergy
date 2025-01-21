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

// Used for GET: /resources
export async function getResources(req: Request, res: Response) {
  const client = await pool.connect();
  
  try {
    const query = `
      SELECT *
      FROM resources 
      ORDER BY name ASC
    `;
    const result = await client.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({ error: 'Failed to fetch resources' });
  } finally {
    client.release();
  }
}
