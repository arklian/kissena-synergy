import { Request, Response } from "express";
import { pool } from "../auth/auth";

// Used for POST: /events/post/{eventId}

export async function upsertEvent(req: Request, res: Response) {
  const { eventId } = req.params;
  const { title, location, description, date, startTime, endTime, team, partner, learnMoreUrl } = req.body;
  const client = await pool.connect();
  
  try {
    const query = `
      INSERT INTO events (id, title, location, description, date, startTime, endTime, team, partner, learnMoreUrl)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      ON CONFLICT (id) DO UPDATE
      SET title = $2, 
          location = $3,
          description = $4,
          date = $5,
          start_time = $6,
          end_time = $7,
          team = $8,
          partner = $9,
          learn_more_url = $10
      RETURNING *
    `;
    const values = [
      eventId || crypto.randomUUID(),
      title,
      location,
      description,
      date,
      startTime,
      endTime,
      team,
      partner,
      learnMoreUrl
    ];
    
    const result = await client.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error upserting event:', error);
    res.status(500).json({ error: 'Failed to upsert event' });
  } finally {
    client.release();
  }
}
