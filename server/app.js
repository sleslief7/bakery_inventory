const express = require('express');
require('dotenv').config();
const categoriesRouter = require('./routes/categoriesRoute.js');
const itemsRouter = require('./routes/itemsRoute.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/categories', categoriesRouter);
app.use('/api/items', itemsRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
