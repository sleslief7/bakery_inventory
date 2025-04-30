const { Router } = require('express');
const {
  getAllItems,
  getItemById,
  createItem,
  getItemsByCategoryId,
  deleteItemById,
} = require('../controllers/itemsController.js');

const itemsRouter = Router();

itemsRouter.get('/', getAllItems);
itemsRouter.post('/', createItem);
itemsRouter.get('/:id', getItemById);
itemsRouter.get('/categories/:categoryId', getItemsByCategoryId);
itemsRouter.delete('/:id', deleteItemById);

module.exports = itemsRouter;
