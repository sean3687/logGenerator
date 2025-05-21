import { Request, Response } from "express";
import client from "@repo/supabase/src/db/pgClient";

export const getUser = (req: Request, res: Response) => {
  const userId = req.params.id;

  res.json({ id: userId, name: "John Doe" });
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await client.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
}

export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(201).json({ id: Date.now().toString(), name });
};
