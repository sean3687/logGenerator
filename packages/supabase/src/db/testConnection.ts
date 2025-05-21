import client, { connect, disconnect } from './pgClient';

async function testConnection() {
  try {
    await connect();
    const res = await client.query("SELECT 'Connection Successful' as message");
    console.log("✅", res.rows[0].message);
  } catch (error) {
    console.error("❌ Test connection error:", error);
  } finally {
    await disconnect();
  }
}

testConnection().catch(console.error);
