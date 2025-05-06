const asyncHandler = require('express-async-handler');
const {
  queryAllDesserts,
  queryDessertById,
  addDessert,
  queryDessertsByCategoryId,
  queryCategoryById,
  deleteDessert,
} = require('../db/queries.js');

const getAllDesserts = asyncHandler(async (req, res) => {
  const desserts = await queryAllDesserts();
  res.status(200).json(desserts);
});

const getDessertById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const dessert = await queryDessertById(id);
  if (!dessert) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'Dessert not found' });
  }
  res.status(200).json(dessert);
});

const createDessert = asyncHandler(async (req, res) => {
  const { name, flavor, category_id, img_url } = req.body;

  if (!name || !flavor || !category_id || !img_url) {
    return res
      .status(400)
      .json({ status: 'fail', message: 'All fields are required' });
  }

  const newDessert = await addDessert({ name, flavor, category_id, img_url });
  res.status(201).json(newDessert);
});

const getDessertsByCategoryId = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  const category = await queryCategoryById(categoryId);
  if (!category) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'Category not found' });
  }
  const desserts = await queryDessertsByCategoryId(categoryId);
  res.status(200).json(desserts);
});

const deleteDessertById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const dessert = await deleteDessert(id);
  if (!dessert) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'Dessert not found' });
  }
  res.status(200).json(dessert);
});

module.exports = {
  getAllDesserts,
  getDessertById,
  createDessert,
  getDessertsByCategoryId,
  deleteDessertById,
};
