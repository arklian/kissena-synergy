import { Request, Response } from "express";

// Used for GET: /resources/tags
export function getTags(req: Request, res: Response) {
  res.send(sampleTags);
}

const sampleTags = [
  { id: 't1', title: 'Volunteer', color: '#4caf50' }, // Green
  { id: 't2', title: 'Parks Events', color: '#2196f3' }, // Blue
  { id: 't3', title: 'Job Opportunities', color: '#ff9800' }, // Orange
  { id: 't4', title: 'Community Input', color: '#9c27b0' }, // Purple
  { id: 't5', title: 'Partner Events', color: '#e91e63' }, // Pink
  { id: 't6', title: 'Civic Engagement', color: '#3f51b5' }, // Indigo
  { id: 't7', title: 'Volunteer', color: '#8bc34a' }, // Light Green
  { id: 't8', title: 'Kissena Forestry', color: '#ff5722' }, // Deep Orange
  { id: 't9', title: 'NYC Parks & Trails', color: '#795548' }, // Brown
  { id: 't10', title: 'Micromobility', color: '#607d8b' }, // Blue Gray
  { id: 't11', title: 'Discounted Events', color: '#f44336' }, // Red
  { id: 't12', title: 'Resource Links', color: '#00bcd4' }, // Cyan
  { id: 't13', title: 'School Resources', color: '#009688' }, // Teal
  { id: 't14', title: 'Food Pantry', color: '#ffeb3b' } // Yellow
]