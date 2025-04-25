require('dotenv').config();
const { Client } = require('pg');

const SQL = `
  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL);
    
    CREATE TABLE IF NOT EXISTS items (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    flavor TEXT NOT NULL,
    img_url TEXT NOT NULL);`;

async function seedDatabase() {
  console.log('Seeding database...');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('Database seeded successfully!');
}

seedDatabase();
