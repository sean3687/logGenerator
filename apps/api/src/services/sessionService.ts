import client from "@repo/supabase/src/db/pgClient";

export type SessionStatus = 'pending' | 'in-progress' | 'complete' | 'error';

export const createSession = async () => {
  const result = await client.query(
    "INSERT INTO session (status) VALUES ('pending') RETURNING id"
  );
  return result.rows[0].id;
};

export const updateSessionStatus = async (sessionId: string, status: SessionStatus, markdown?: string) => {
  const query = markdown 
    ? "UPDATE session SET status = $1, markdown = $2 WHERE id = $3 RETURNING *"
    : "UPDATE session SET status = $1 WHERE id = $2 RETURNING *";
  
  const values = markdown 
    ? [status, markdown, sessionId]
    : [status, sessionId];

  const result = await client.query(query, values);
  return result.rows[0];
};

export const getSession = async (sessionId: string) => {
  const result = await client.query(
    "SELECT * FROM session WHERE id = $1",
    [sessionId]
  );
  return result.rows[0];
}; 