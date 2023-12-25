import Layout from './components/Layout';

import {
  HomePage,
  LoginPage,
  SignupPage,
  SignupCompletePage,
  ProductListPage,
  ProductDetailPage,
  CartPage,
  OrderListPage,
  OrderDetailPage,
  OrderPage,
  OrderCompletePage,
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
      { path: PATHNAME.ORDERS, element: <OrderListPage /> },
      { path: `${PATHNAME.ORDERS}/:id`, element: <OrderDetailPage /> },
      { path: PATHNAME.ORDER, element: <OrderPage /> },
      { path: PATHNAME.ORDER_COMPLETE, element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
