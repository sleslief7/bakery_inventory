const { Router } = require('express');
const {
  getAllCategories,
  createCategory,
  deleteCategoryById,
  getCategoryById,
  updateCategory,
} = require('../controllers/categoriesController.js');

const categoriesRouter = Router();

categoriesRouter.get('/', getAllCategories);
categoriesRouter.post('/', createCategory);
categoriesRouter.delete('/:id', deleteCategoryById);
categoriesRouter.get('/:id', getCategoryById);
categoriesRouter.put('/:id', updateCategory);

module.exports = categoriesRouter;
