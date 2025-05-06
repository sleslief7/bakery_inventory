const asyncHandler = require('express-async-handler');
const pool = require('../db/pool.js');

const queryAllDesserts = asyncHandler(async () => {
  const { rows } = await pool.query('SELECT * FROM desserts');
  return rows;
});

const queryDessertById = asyncHandler(async (id) => {
  const { rows } = await pool.query('SELECT * FROM desserts WHERE id = $1', [
    id,
  ]);
  return rows[0];
});

const addDessert = asyncHandler(async (dessert) => {
  const { rows } = await pool.query(
    'INSERT INTO desserts (name, flavor, category_id, img_url) VALUES ($1, $2, $3, $4) RETURNING *',
    [dessert.name, dessert.flavor, dessert.category_id, dessert.img_url]
  );
  return rows[0];
});

const queryDessertsByCategoryId = asyncHandler(async (categoryId) => {
  const { rows } = await pool.query(
    'SELECT * FROM desserts WHERE category_id = $1',
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

const deleteDessert = asyncHandler(async (id) => {
  const { rows } = await pool.query(
    'DELETE FROM desserts WHERE id = $1 RETURNING *',
    [id]
  );
  return rows[0];
});

const updateDessertById = asyncHandler(async (id, dessert) => {
  const { rows } = await pool.query(
    'UPDATE desserts SET name = $1, flavor = $2, category_id = $3, img_url = $4 WHERE id = $5 RETURNING *',
    [dessert.name, dessert.flavor, dessert.category_id, dessert.img_url, id]
  );
  return rows[0];
});

const updateCategoryById = asyncHandler(async (id, categoryName) => {
  const { rows } = await pool.query(
    'UPDATE categories SET name = $1 WHERE id = $2 RETURNING *',
    [categoryName, id]
  );
  return rows[0];
});

module.exports = {
  queryAllDesserts,
  queryDessertById,
  addDessert,
  queryDessertsByCategoryId,
  queryAllCategories,
  queryCategoryById,
  addCategory,
  deleteCategory,
  deleteDessert,
  updateDessertById,
  updateCategoryById,
};
