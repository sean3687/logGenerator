import client, { connect, disconnect } from './pgClient';
import fs from 'fs';
import path from 'path';

async function runMigrations() {
  try {
    await connect();

    const migrationsDir = path.join(__dirname, '../migrations');
    const files = fs.readdirSync(migrationsDir).sort();

    for (const file of files) {
      if (file.endsWith('.sql')) {
        const filePath = path.join(migrationsDir, file);
        const sql = fs.readFileSync(filePath, 'utf8');
        console.log(`🚀 Running migration: ${file}`);
        await client.query(sql);
      }
    }

    console.log("✅ All migrations applied successfully");
  } catch (error) {
    console.error("❌ Migration error:", error);
    throw error;
  } finally {
    await disconnect();
  }
}

runMigrations().catch(console.error);
