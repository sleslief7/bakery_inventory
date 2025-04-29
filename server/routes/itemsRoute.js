const { Router } = require('express');
const {
  getAllItems,
  getItemById,
  createItem,
  getItemsByCategoryId,
} = require('../controllers/itemsController.js');

const itemsRouter = Router();

itemsRouter.get('/', getAllItems);
itemsRouter.post('/', createItem);
itemsRouter.get('/:id', getItemById);
itemsRouter.get('/categories/:categoryId', getItemsByCategoryId);

exports.module = itemsRouter;
