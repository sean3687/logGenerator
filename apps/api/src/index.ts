import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from "./routes";
import { connect } from "../../../packages/supabase/src/db/pgClient";

const app = express();
const PORT = process.env.PORT || 4001;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Health Check Route
app.get('/ping', (_req, res) => {
  res.send('pong from Express API');
});

// API Routes
app.use("/api", routes);

// Start the server and connect to the database
app.listen(PORT, async () => {
  try {
    await connect();  // Connect to the database
    console.log(`🚀 API server running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error);
    process.exit(1);
  }
});

export default app;
