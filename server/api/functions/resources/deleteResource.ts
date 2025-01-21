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

// Used for DELETE: /resources/delete/{resourceId}
export async function deleteResource(req: Request, res: Response) {
  const { resourceId } = req.params;
  const client = await pool.connect();
  
  try {
    const query = 'DELETE FROM resources WHERE id = $1 RETURNING *';
    const result = await client.query(query, [resourceId]);
    
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    
    res.json({
      message: 'Resource deleted successfully',
      deleted: result.rows[0]
    });
  } catch (error) {
    console.error('Error deleting resource:', error);
    res.status(500).json({ error: 'Failed to delete resource' });
  } finally {
    client.release();
  }
}