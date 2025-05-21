import { Client } from 'pg';
import dotenv from 'dotenv';
import path from 'path';

// Load the correct environment file
const envFilePath = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv.config({ path: path.resolve(__dirname, '..', envFilePath) });

// Extract the database URL
const databaseUrl = process.env.DATABASE_URL || 'postgresql://postgres:postgres@127.0.0.1:54322/postgres';

// Create the PostgreSQL client
const client = new Client({
  connectionString: databaseUrl,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Connect and disconnect functions
export async function connect() {
  try {
    await client.connect();
    console.log(`🚀 Connected to the ${process.env.NODE_ENV || 'development'} database at http://127.0.0.1:54323`);
  } catch (error) {
    console.error("❌ Database connection error:", error);
    process.exit(1);
  }
}

export async function disconnect() {
  try {
    await client.end();
    console.log("🔌 Disconnected from the database");
  } catch (error) {
    console.error("❌ Error disconnecting from the database:", error);
    process.exit(1);
  }
}

// Export the client for direct queries
export default client;

