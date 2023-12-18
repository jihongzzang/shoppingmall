import { fireEvent, screen, waitFor } from '@testing-library/react';

import { renderRouter } from './test-helpers';

import fixtures from '../fixtures';

import PATHNAME from './constants/pathname';

const [product] = fixtures.products;

const [categories] = fixtures.categories;

const context = describe;

describe('routes', () => {
  context(`when the current path is '${PATHNAME.HOME}'`, () => {
    it('renders the home page', async () => {
      renderRouter(PATHNAME.HOME);

      screen.getByText(/Shop/);

      await waitFor(() => {
        screen.getByText(/상의/);
        screen.getByText(/아우터/);
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

  context(`when the current path is '${PATHNAME.LOGIN}`, () => {
    it('renders the login page', async () => {
      renderRouter(`${PATHNAME.LOGIN}`);

      screen.getByRole('heading', { name: '로그인' });

      await waitFor(() => {
        screen.getByText(/상의/);
      });

      fireEvent.change(screen.getByLabelText('E-mail'), {
        target: { value: 'newbie@example.com' },
      });

      fireEvent.change(screen.getByLabelText('Password'), {
        target: { value: 'password' },
      });

      fireEvent.click(screen.getByRole('button', { name: '로그인' }));

      await waitFor(() => {
        // screen.getByText(/주문/);
        screen.getByText(/장바구니/);
        screen.getByText(/로그아웃/);
      });
    });
  });
});
