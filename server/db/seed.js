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
    img_url TEXT NOT NULL);
    
    INSERT INTO categories (name) VALUES('Cakes'), ('Cookies'), ('Cupcakes'), ('Pies');
    
    INSERT INTO items (category_id, name, flavor, img_url) VALUES
    (1, 'Chocolate Cake', 'Chocolate', 'https://butternutbakeryblog.com/wp-content/uploads/2023/04/chocolate-cake.jpg'),
    (1, 'Vanilla Cake', 'Vanilla', 'https://thescranline.com/wp-content/uploads/2025/02/VANILLA-CAKE-25-S-01.jpg'),
    (2, 'Chocolate Chip Cookie', 'Chocolate Chip', 'https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-jumbo.jpg'),
    (2, 'Oatmeal Raisin Cookie', 'Oatmeal Raisin', 'https://www.eatingbirdfood.com/wp-content/uploads/2024/02/oatmeal-raisin-cookies-hero-new.jpg'),
    (3, 'Red Velvet Cupcake', 'Red Velvet', 'https://therealkitchen.com/wp-content/uploads/2023/02/Red_velvet_cupcakes.png'),
    (3, 'Lemon Cupcake', 'Lemon', 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F2023-02-Lemon-Cupcakes%2Flemon-cupcakes-3'),
    (4, 'Apple Pie', 'Apple', 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/11/Apple-Pie.jpg'),
    (4, 'Cherry Pie', 'Cherry', 'https://www.theflouredtable.com/wp-content/uploads/2023/05/cherry-rhubarb-pie-FP-500x500.jpg');`;

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
