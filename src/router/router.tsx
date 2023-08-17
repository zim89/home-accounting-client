import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Transactions from '../pages/Transactions';
import Auth from '../pages/Auth';
import ProtectedRoute from '../components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'categories',
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: 'transactions',
        element: (
          <ProtectedRoute>
            <Transactions />
          </ProtectedRoute>
        ),
      },
      {
        path: 'auth',
        element: <Auth />,
      },
    ],
  },
]);
