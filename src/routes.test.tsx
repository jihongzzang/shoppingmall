import { screen, waitFor } from '@testing-library/react';

import { render } from './utils/test-helpers';

import { HomePage, ProductDetailPage, ProductListPage } from './pages';
import fixtures from '../fixtures';
import PATHNAME from './constants/pathname';

const context = describe;

describe('routes', () => {
  context(`when the current path is '${PATHNAME.HOME}'`, () => {
    it('renders the home page', () => {
      render(<HomePage />);

      screen.getByText(/Home page/);
    });
  });

  context(`when the current path is '${PATHNAME.PRODUCTS}'`, () => {
    context('without category ID', () => {
      it('renders the product list page', async () => {
        render(<ProductListPage />, { path: PATHNAME.PRODUCTS });

        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });

    context('with category ID', () => {
      it('renders the product list page', async () => {
        render(<ProductListPage />, {
          path: `${PATHNAME.PRODUCTS}?categoryId=${fixtures.categories[0].id}`,
        });

        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });
  });

  context("when the current path is '/products/{id}'", () => {
    context('with correct ID', () => {
      it('renders the product detail page', async () => {
        render(<ProductDetailPage />, {
          path: `${PATHNAME.PRODUCTS}/product-01`,
        });

        screen.getByText(/Loading/);

        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });

    context('with incorrect ID', () => {
      it('renders "not found" message', async () => {
        render(<ProductDetailPage />, {
          path: `${PATHNAME.PRODUCTS}/xxx`,
        });

        await waitFor(() => {
          screen.getByText(/Error/);
        });
      });
    });
  });
});
