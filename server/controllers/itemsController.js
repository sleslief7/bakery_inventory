const asyncHandler = require('express-async-handler');
const {
  queryAllItems,
  queryItemById,
  addItem,
  queryItemsByCategoryId,
  queryCategoryById,
  deleteItem,
} = require('../db/queries.js');

const getAllItems = asyncHandler(async (req, res) => {
  const items = await queryAllItems();
  res.status(200).json({ status: 'success', data: items });
});

const getItemById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const item = await queryItemById(id);
  if (!item) {
    return res.status(404).json({ status: 'fail', message: 'Item not found' });
  }
  res.status(200).json({ status: 'success', data: item });
});

const createItem = asyncHandler(async (req, res) => {
  const { name, flavor, category_id, img_url } = req.body;

  if (!name || !flavor || !category_id || !img_url) {
    return res
      .status(400)
      .json({ status: 'fail', message: 'All fields are required' });
  }

  const newItem = await addItem({ name, flavor, category_id, img_url });
  res.status(201).json({ status: 'success', data: newItem });
});

const getItemsByCategoryId = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  const category = await queryCategoryById(categoryId);
  if (!category) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'Category not found' });
  }
  const items = await queryItemsByCategoryId(categoryId);
  res.status(200).json({ status: 'success', data: items });
});

const deleteItemById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const item = await deleteItem(id);
  if (!item) {
    return res.status(404).json({ status: 'fail', message: 'Item not found' });
  }
  res.status(200).json({ status: 'success', data: item });
});

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  getItemsByCategoryId,
  deleteItemById,
};
