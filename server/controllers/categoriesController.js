const asyncHandler = require('express-async-handler');
const { queryAllCategories, addCategory } = require('../db/queries.js');

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await queryAllCategories();
  res.status(200).json({ status: 'success', data: categories });
});

const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  console.log('name:', name);
  if (!name) {
    return res
      .status(400)
      .json({ status: 'fail', message: 'Category name is required' });
  }

  const newCategory = await addCategory(name);
  res.status(201).json({ status: 'success', data: newCategory });
});

module.exports = { getAllCategories, createCategory };
