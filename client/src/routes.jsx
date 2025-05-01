import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import CategoriesPage from './components/pages/CategoriesPage.jsx';
import ItemsPage from './components/pages/ItemsPage';
import ItemPage from './components/pages/ItemPage';
import { categoriesLoader } from './loaders/categoriesLoader.jsx';
import {
  itemsByCategoryLoader,
  itemByIdLoader,
} from './loaders/itemsLoader.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <CategoriesPage />,
        loader: categoriesLoader,
      },
      {
        path: 'items/:categoryId',
        element: <ItemsPage />,
        loader: itemsByCategoryLoader,
      },
      {
        path: 'item/:itemId',
        element: <ItemPage />,
        loader: itemByIdLoader,
      },
    ],
  },
]);

export default router;
