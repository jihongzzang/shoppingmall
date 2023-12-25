// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { ProductSummary } from '../types';

import fixtures from '../../fixtures';

const BASE_URL = 'https://shop-demo-api-03.fly.dev';

const productSummaries: ProductSummary[] = fixtures.products.map((product) => ({
  id: product.id,
  category: product.category,
  thumbnail: { url: product.images[0].url },
  name: product.name,
  price: product.price,
}));

const handlers = [
  // 로그인
  rest.post(
    `${BASE_URL}/session`,
    (req, res, ctx) => res(ctx.json({ accessToken: 'USER' }))
    // TO DO 400 작성
  ),

  // 로그아웃
  rest.delete(`${BASE_URL}/session`, (req, res, ctx) => res(ctx.status(200))),

  // 현재 유저확인
  rest.get(`${BASE_URL}/users/me`, (req, res, ctx) =>
    res(ctx.json({ id: '0BV000USR0001', name: 'Tester' }))
  ),

  // 회원가입
  rest.post(`${BASE_URL}/users`, (req, res, ctx) =>
    res(ctx.json({ accessToken: 'ACCESS-TOKEN' }))
  ),

  // 헤더 카테고리
  rest.get(`${BASE_URL}/categories`, (req, res, ctx) =>
    res(ctx.json({ categories: fixtures.categories }))
  ),

  // 상품리스트
  rest.get(`${BASE_URL}/products`, (req, res, ctx) =>
    res(ctx.json({ products: productSummaries }))
  ),

  // 상품상세
  rest.get(`${BASE_URL}/products/:id`, (req, res, ctx) => {
    const product = fixtures.products.find((i) => i.id === req.params.id);
    if (!product) {
      return res(ctx.status(404));
    }
    return res(ctx.json(product));
  }),

  // 장바구니 담기
  rest.post(`${BASE_URL}/cart/line-items`, (req, res, ctx) =>
    res(ctx.status(201))
  ),

  // 장바구니
  rest.get(`${BASE_URL}/cart`, (req, res, ctx) => res(ctx.json(fixtures.cart))),

  // 주문목록
  rest.get(`${BASE_URL}/orders`, (req, res, ctx) =>
    res(ctx.json(fixtures.orders))
  ),

  // 주문상세
  rest.get(`${BASE_URL}/orders/:id`, (req, res, ctx) => {
    const error = fixtures.order.id !== req?.params?.id;

    if (error) {
      return res(ctx.status(404));
    }

    return res(ctx.json(fixtures.order));
  }),
];

export default handlers;
