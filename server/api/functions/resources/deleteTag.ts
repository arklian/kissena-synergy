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
export async function deleteTag(req: Request, res: Response) {
  const { tagId } = req.params;
  const client = await pool.connect();
  
  try {
    const query = `
      UPDATE resources 
      SET tag = NULL 
      WHERE tag = $1 
      RETURNING *
    `;
    const result = await client.query(query, [tagId]);
    
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Tag not found' }); //Please check to make sure this is the right error.
    }
    
    res.json({
      message: 'Tag deleted successfully',
      updatedResources: result.rows
    });
  } catch (error) {
    console.error('Error deleting tag:', error);
    res.status(500).json({ error: 'Failed to delete tag' });
  } finally {
    client.release();
  }
}