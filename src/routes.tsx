import Layout from './components/Layout';

import {
  HomePage,
  LoginPage,
  ProductListPage,
  ProductDetailPage,
  CartPage,
} from './pages';

import PATHNAME from './constants/pathname';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: PATHNAME.HOME, element: <HomePage /> },
      { path: PATHNAME.LOGIN, element: <LoginPage /> },
      { path: PATHNAME.PRODUCTS, element: <ProductListPage /> },
      { path: `${PATHNAME.PRODUCTS}/:id`, element: <ProductDetailPage /> },
      { path: PATHNAME.CART, element: <CartPage /> },
    ],
  },
];

export default routes;
