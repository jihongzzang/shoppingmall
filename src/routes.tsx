import Layout from './components/Layout';

import {
  HomePage,
  LoginPage,
  ProductListPage,
  ProductDetailPage,
  CartPage,
  SignupPage,
  SignupCompletePage,
} from './pages';

import PATHNAME from './constants/pathname';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: PATHNAME.HOME, element: <HomePage /> },
      { path: PATHNAME.LOGIN, element: <LoginPage /> },
      { path: PATHNAME.SIGNUP, element: <SignupPage /> },
      { path: PATHNAME.SIGNUP_COMPLETE, element: <SignupCompletePage /> },
      { path: PATHNAME.PRODUCTS, element: <ProductListPage /> },
      { path: `${PATHNAME.PRODUCTS}/:id`, element: <ProductDetailPage /> },
      { path: PATHNAME.CART, element: <CartPage /> },
    ],
  },
];

export default routes;
