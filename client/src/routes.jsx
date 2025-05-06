import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import CategoriesPage from './components/pages/CategoriesPage.jsx';
import DessertsPage from './components/pages/DessertsPage';
import DessertPage from './components/pages/DessertPage';
import CreateDessertPage from './components/pages/CreateDessertPage';
import EditDessertPage from './components/pages/EditDessertPage';

import CategoriesForm from './components/CategoriesForm.jsx';
import {
  categoriesLoader,
  dessertByIdLoader,
  categoriesWithDessertsLoader,
} from './actions.jsx';

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
        path: 'categories/new',
        element: <CategoriesForm />,
      },
      {
        path: 'categories/:categoryId/desserts',
        element: <DessertsPage />,
        loader: categoriesWithDessertsLoader,
      },
      {
        path: 'desserts/:dessertId',
        element: <DessertPage />,
        loader: dessertByIdLoader,
      },
      {
        path: 'desserts/new',
        element: <CreateDessertPage />,
        loader: categoriesLoader,
      },
      {
        path: 'categories/:categoryId/desserts/:dessertId/edit',
        element: <EditDessertPage />,
        loader: categoriesLoader,
      },
    ],
  },
]);

export default router;
