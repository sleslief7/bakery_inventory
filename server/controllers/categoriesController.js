const asyncHandler = require('express-async-handler');
const {
  queryAllCategories,
  addCategory,
  queryCategoryById,
  deleteCategory,
} = require('../db/queries.js');

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await queryAllCategories();
  res.status(200).json(categories);
});

const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ status: 'fail', message: 'Category name is required' });
  }

  const newCategory = await addCategory(name);
  res.status(201).json(newCategory);
});

const deleteCategoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await queryCategoryById(id);
  if (!category) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'Category not found' });
  }
  const deletedCategory = await deleteCategory(id);
  res.status(200).json(deletedCategory);
});

const getCategoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await queryCategoryById(id);
  if (!category) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'Category not found' });
  }
  res.status(200).json(category);
});

module.exports = {
  getAllCategories,
  createCategory,
  deleteCategoryById,
  getCategoryById,
};
