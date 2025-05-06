const { Router } = require('express');
const {
  getAllDesserts,
  getDessertById,
  createDessert,
  getDessertsByCategoryId,
  deleteDessertById,
  updateDessert,
} = require('../controllers/dessertsController.js');

const dessertsRouter = Router();

dessertsRouter.get('/', getAllDesserts);
dessertsRouter.post('/', createDessert);
dessertsRouter.get('/:id', getDessertById);
dessertsRouter.get('/categories/:categoryId', getDessertsByCategoryId);
dessertsRouter.delete('/:id', deleteDessertById);
dessertsRouter.put('/:id', updateDessert);

module.exports = dessertsRouter;
