import { screen, waitFor } from '@testing-library/react';

import { renderRouter } from './utils/test-helpers';

import fixtures from '../fixtures';

import PATHNAME from './constants/pathname';

const [product] = fixtures.products;

const [categories] = fixtures.categories;

const context = describe;

describe('routes', () => {
  context(`when the current path is '${PATHNAME.HOME}'`, () => {
    it('renders the home page', async () => {
      renderRouter(PATHNAME.HOME);

      screen.getByText(/Products/);

      await waitFor(() => {
        screen.getByText(/Category #1/);
        screen.getByText(/Category #2/);
        screen.getByText(/Cart/);
      });
    });
  });

  context(`when the current path is '${PATHNAME.PRODUCTS}'`, () => {
    context('without category ID', () => {
      it('renders the product list page', async () => {
        renderRouter(PATHNAME.PRODUCTS);

        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });

    context('with category ID', () => {
      it('renders the product list page', async () => {
        renderRouter(`${PATHNAME.PRODUCTS}?categoryId=${categories.id}`);

        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });
  });

  context(`when the current path is '${PATHNAME.PRODUCTS}/:id'`, () => {
    context('with correct ID', () => {
      it('renders the product detail page', async () => {
        renderRouter(`${PATHNAME.PRODUCTS}/${product.id}`);

        screen.getByText(/Loading/);

        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });

    context('with incorrect ID', () => {
      it('renders "not found" message', async () => {
        renderRouter(`${PATHNAME.PRODUCTS}/xxx`);

        await waitFor(() => {
          screen.getByText(/Error/);
        });
      });
    });
  });

  context(`when the current path is '${PATHNAME.CART}`, () => {
    context('', () => {
      it('renders the cart page', async () => {
        renderRouter(`${PATHNAME.CART}`);

        await waitFor(() => {
          screen.getByText(/장바구니/);
        });
      });
    });
  });
});
