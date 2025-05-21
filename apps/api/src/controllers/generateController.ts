import { Request, Response } from "express";
import { generateChangelog } from "../services/generateService";
import { createSession, getSession } from "../services/sessionService";

export const handleGenerateChangelog = async (req: Request, res: Response) => {
  try {
    const { repoUrl, startDate, endDate } = req.body;
    const sessionId = await createSession();
    
    // Run in the background
    generateChangelog(sessionId, repoUrl, startDate, endDate).catch(error => {
      console.error('Error generating changelog:', error);
    });

    res.json({ sessionId });
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: 'Failed to create session' });
  }
};

export const getSessionStatus = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const session = await getSession(sessionId);
    
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    
    res.json(session );
  } catch (error) {
    console.error('Error fetching session:', error);
    res.status(500).json({ error: 'Failed to fetch session status' });
  }
};