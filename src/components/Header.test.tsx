import { screen, waitFor } from '@testing-library/react';

import { render } from '../test-helpers';

import Header from './Header';

import PATHNAME from '../constants/pathname';

import categories from '../../fixtures/categories';

import { categoryFormat } from '../utils';

let accessToken = '';

jest.mock('../hooks/useAccessToken', () => () => ({
  get accessToken() {
    return accessToken;
  },
}));

const context = describe;

describe('Header', () => {
  it('render basic link', async () => {
    render(<Header />);

    await waitFor(() => {
      screen.getByText(/Shop/);

      ['홈', '전체', '상의', '하의', '아우터', '악세사리'].forEach((ele) => {
        screen.getByRole('link', { name: ele });
      });
    });
  });

  context("when the current user isn't logged in", () => {
    beforeEach(() => {
      accessToken = '';
    });

    it('renders "Login" link', async () => {
      render(<Header />);

      await waitFor(() => {
        screen.getByRole('link', { name: '로그인' });
      });
    });
  });

  context('when the current user is logged in', () => {
    beforeEach(() => {
      accessToken = 'ACCESS-TOKEN';
    });

    it('renders "Cart" link', async () => {
      render(<Header />);

      await waitFor(() => {
        screen.getByRole('link', { name: '장바구니' });
      });
    });

    it('renders "Cart" link', async () => {
      render(<Header />);

      await waitFor(() => {
        screen.getByRole('button', { name: '로그아웃' });
      });
    });
  });
});

// describe('Highlighting correct link based on the current path', () => {
//   const mainPaths = [
//     { path: PATHNAME.HOME, name: '홈' },
//     { path: PATHNAME.PRODUCTS, name: '전체' },
//     { path: PATHNAME.CART, name: '장바구니' },
//   ];

//   mainPaths.forEach(({ path, name }) => {
//     context(`when the current path is '${path}'`, () => {
//       it(`selects the '${name}' link`, async () => {
//         render(<Header />, { path });

//         await waitFor(() => {
//           const selectedLink = screen.getByText(name);
//           expect(selectedLink).toHaveStyle('fontWeight: 700');
//         });
//       });
//     });
//   });
// });

// describe('Highlighting correct category based on the query parameter', () => {
//   categories.forEach((category) => {
//     context(
//       `when the current path is '${PATHNAME.PRODUCTS}?categoryId=${category.id}'`,
//       () => {
//         it(`selects the '${category.name}' category`, async () => {
//           render(<Header />, {
//             path: `${PATHNAME.PRODUCTS}?categoryId=${category.id}`,
//           });

//           await waitFor(() => {
//             const selectedLink = screen.getByText(categoryFormat(category.id));
//             expect(selectedLink).toHaveStyle('fontWeight: 700');
//           });
//         });
//       },
//     );
//   });
// });
