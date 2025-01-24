import { Request, Response } from "express";

// Used for GET: /resources/tags
export function getTags(req: Request, res: Response) {
  res.send(sampleTags);
}

const sampleTags = [
  { id: 't1', title: 'JavaScript', color: '#f0db4f' },
  { id: 't2', title: 'Programming', color: '#4caf50' },
  { id: 't3', title: 'Web Development', color: '#2196f3' },
  { id: 't4', title: 'Python', color: '#306998' },
  { id: 't5', title: 'Data Science', color: '#ff9800' },
  { id: 't6', title: 'CSS', color: '#264de4' },
  { id: 't7', title: 'Web Design', color: '#e91e63' },
  { id: 't8', title: 'Machine Learning', color: '#f44336' },
  { id: 't9', title: 'TensorFlow', color: '#4caf50' },
  { id: 't10', title: 'React', color: '#61dafb' },
  { id: 't11', title: 'SQL', color: '#ff5722' },
  { id: 't12', title: 'Accessibility', color: '#9c27b0' },
  { id: 't13', title: 'Docker', color: '#0db7ed' },
  { id: 't14', title: 'DevOps', color: '#9c27b0' },
  { id: 't15', title: 'PyTorch', color: '#e53e3e' },
  { id: 't16', title: 'Kubernetes', color: '#326ce5' },
  { id: 't17', title: 'Node.js', color: '#8cc84b' },
  { id: 't18', title: 'Data Visualization', color: '#ff5722' },
  { id: 't19', title: 'Git', color: '#f1502f' },
  { id: 't20', title: 'Flutter', color: '#02569b' },
  { id: 't21', title: 'Vue.js', color: '#4caf50' },
  { id: 't22', title: 'Web Security', color: '#9c27b0' },
  { id: 't23', title: 'Ethics', color: '#607d8b' },
  { id: 't24', title: 'Cloud Computing', color: '#f39c12' },
  { id: 't25', title: 'AWS', color: '#ff9900' },
  { id: 't26', title: 'Blockchain', color: '#0b72b9' },
  { id: 't27', title: 'Cryptocurrency', color: '#f44336' },
]