const asyncHandler = require('express-async-handler');
const {
  queryAllItems,
  queryItemById,
  addItem,
  queryItemsByCategoryId,
  queryCategoryById,
} = require('../db/queries.js');

const getAllItems = asyncHandler(async (req, res) => {
  const items = await queryAllItems();
  res.status(200).json(items);
});

const getItemById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const item = await queryItemById(id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.status(200).json(item);
});

const createItem = asyncHandler(async (req, res) => {
  const { name, flavor, category_id } = req.body;

  if (!name || !flavor || !category_id) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newItem = await addItem({ name, flavor, category_id });
  res.status(201).json(newItem);
});

const getItemsByCategoryId = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  const category = await queryCategoryById(categoryId);
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  const items = await queryItemsByCategoryId(categoryId);
  res.status(200).json(items);
});

exports.module = {
  getAllItems,
  getItemById,
  createItem,
  getItemsByCategoryId,
};
