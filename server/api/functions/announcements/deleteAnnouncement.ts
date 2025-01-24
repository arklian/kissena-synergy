import { Request, Response } from "express";
import {pool} from "@api/functions/auth/auth";

export async function deleteAnnouncement(req: Request, res: Response) {
  const { postId } = req.params;  
  const client = await pool.connect();
  
  try {
    // Check if announcement exists first
    const checkQuery = 'SELECT id FROM announcements WHERE id = $1';
    const checkResult = await client.query(checkQuery, [postId]);
    
    if (checkResult.rowCount === 0) {
      return res.status(404).json({ error: 'Announcement not found' });
    }

    // Deleting
    const deleteQuery = 'DELETE FROM announcements WHERE id = $1 RETURNING *';
    const result = await client.query(deleteQuery, [postId]);
    
    res.json({
      message: 'Announcement deleted successfully',
      deletedAnnouncement: result.rows[0]
    });
  } catch (error) {
    console.error('Error deleting announcement:', error);
    res.status(500).json({ error: 'Failed to delete announcement' });
  } finally {
    client.release();
  }
}
