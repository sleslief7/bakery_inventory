const asyncHandler = require('express-async-handler');
const { queryAllCategories, addCategory } = require('../db/queries.js');

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await queryAllCategories();
  res.status(200).json(categories);
});

const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Category name is required' });
  }

  const newCategory = await addCategory(name);
  res.status(201).json(newCategory);
});

exports.module = { getAllCategories, getItemsByCategoryId, createCategory };
