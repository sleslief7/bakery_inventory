const asyncHandler = require('express-async-handler');
const pool = require('../db/pool.js');

const queryAllItems = asyncHandler(async () => {
  const { rows } = await pool.query('SELECT * FROM items');
  return rows;
});

const queryItemById = asyncHandler(async (id) => {
  const { rows } = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
  return rows[0];
});

const addItem = asyncHandler(async (item) => {
  const { rows } = await pool.query(
    'INSERT INTO items (name, flavor, category_id, img_url) VALUES ($1, $2, $3, $4) RETURNING *',
    [item.name, item.flavor, item.category_id, item.img_url]
  );
  return rows[0];
});

const queryItemsByCategoryId = asyncHandler(async (categoryId) => {
  const { rows } = await pool.query(
    'SELECT * FROM items WHERE category_id = $1',
    [categoryId]
  );
  return rows;
});

const queryAllCategories = asyncHandler(async () => {
  const { rows } = await pool.query('SELECT * FROM categories');
  return rows;
});

const addCategory = asyncHandler(async (category) => {
  const { rows } = await pool.query(
    'INSERT INTO categories (name) VALUES ($1) RETURNING *',
    [category]
  );
  return rows[0];
});

const queryCategoryById = asyncHandler(async (id) => {
  const { rows } = await pool.query('SELECT * FROM categories WHERE id = $1', [
    id,
  ]);
  return rows[0];
});

const deleteCategory = asyncHandler(async (id) => {
  const { rows } = await pool.query(
    'DELETE FROM categories WHERE id = $1 RETURNING *',
    [id]
  );
  return rows[0];
});

module.exports = {
  queryAllItems,
  queryItemById,
  addItem,
  queryItemsByCategoryId,
  queryAllCategories,
  queryCategoryById,
  addCategory,
  deleteCategory,
};
