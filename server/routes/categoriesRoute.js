const { Router } = require('express');
const {
  getAllCategories,
  createCategory,
} = require('../controllers/categoriesController.js');

const categoriesRouter = Router();

categoriesRouter.get('/', getAllCategories);
categoriesRouter.post('/', createCategory);

exports.module = categoriesRouter;
