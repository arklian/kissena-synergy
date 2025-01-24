import { Request, Response } from "express";
import { pool } from "../auth/auth";

// Used for DELETE: /events/delete/{eventId}

export async function deleteEvent(req: Request, res: Response) {
  const { eventId } = req.params;
  const client = await pool.connect();
  
  try {
  
    const checkQuery = 'SELECT id FROM events WHERE id = $1';
    const checkResult = await client.query(checkQuery, [eventId]);
    
    if (checkResult.rowCount === 0) {
      return res.status(404).json({ error: 'Event not found' });
    }


    const deleteQuery = 'DELETE FROM events WHERE id = $1 RETURNING *';
    const result = await client.query(deleteQuery, [eventId]);
    
    res.json({
      message: 'Event deleted successfully',
      deletedEvent: result.rows[0]
    });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Failed to delete event' });
  } finally {
    client.release();
  }
}