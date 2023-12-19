import { fireEvent, screen, waitFor } from '@testing-library/react';

import { render } from '../test-helpers';

import Header from './Header';

import PATHNAME from '../constants/pathname';

import { categoryFormat } from '../utils';

import fixtures from '../../fixtures';

const { categories } = fixtures;

const navigate = jest.fn();

let accessToken = '';

const setAccessToken = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => navigate,
}));

jest.mock('../hooks/useAccessToken', () => () => ({
  get accessToken() {
    return accessToken;
  },
  setAccessToken,
}));

jest.mock('../hooks/useFetchCategories', () => () => ({
  categories,
}));

const context = describe;

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title', () => {
    render(<Header />);

    screen.getByText(/Shop/);
  });

  it('renders basic link', async () => {
    render(<Header />);

    await waitFor(() => {
      ['홈', '전체', '상의', '하의', '아우터', '악세사리'].forEach((ele) => {
        screen.getByRole('link', { name: ele });
      });
    });
  });

  context("when the current user isn't logged in", () => {
    beforeEach(() => {
      accessToken = '';
    });

    it('renders "Login" link', () => {
      render(<Header />);

      screen.getByRole('link', { name: '로그인' });
    });
  });

  context('when the current user is logged in', () => {
    beforeEach(() => {
      accessToken = 'ACCESS-TOKEN';
    });

    it('renders "Cart" link', () => {
      render(<Header />);

      screen.getByRole('link', { name: '장바구니' });
    });

    it('renders "Logout" button', async () => {
      render(<Header />);

      const button = screen.getByRole('button', { name: '로그아웃' });

      fireEvent.click(button);

      await waitFor(() => {
        expect(setAccessToken).toBeCalledWith('');
        expect(navigate).toBeCalledWith('/');
      });
    });
  });
});

describe('Highlighting correct link based on the current path', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const notLoggedInMainPaths = [
    { path: PATHNAME.HOME, name: '홈' },
    { path: PATHNAME.PRODUCTS, name: '전체' },
    { path: PATHNAME.LOGIN, name: '로그인' },
  ];

  context("when the current user isn't logged in", () => {
    beforeEach(() => {
      accessToken = '';
    });

    notLoggedInMainPaths.forEach(({ path, name }) => {
      context(`when the current path is '${path}'`, () => {
        it(`selects the '${name}' link`, async () => {
          render(<Header />, { path });

          await waitFor(() => {
            const selectedLink = screen.getByText(name);
            expect(selectedLink).toHaveStyle('fontWeight: 700');
          });
        });
      });
    });
  });

  const loggedInMainPaths = [
    { path: PATHNAME.HOME, name: '홈' },
    { path: PATHNAME.PRODUCTS, name: '전체' },
    { path: PATHNAME.CART, name: '장바구니' },
  ];

  context('when the current user is logged in', () => {
    beforeEach(() => {
      accessToken = 'ACCESS-TOKEN';
    });

    loggedInMainPaths.forEach(({ path, name }) => {
      context(`when the current path is '${path}'`, () => {
        it(`selects the '${name}' link`, async () => {
          render(<Header />, { path });

          await waitFor(() => {
            const selectedLink = screen.getByText(name);
            expect(selectedLink).toHaveStyle('fontWeight: 700');
          });
        });
      });
    });
  });
});

describe('Highlighting correct category based on the query parameter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  categories.forEach((category) => {
    context(
      `when the current path is '${PATHNAME.PRODUCTS}?categoryId=${category.id}'`,
      () => {
        it(`selects the '${category.name}' category`, async () => {
          render(<Header />, {
            path: `${PATHNAME.PRODUCTS}?categoryId=${category.id}`,
          });

          await waitFor(() => {
            const selectedLink = screen.getByText(categoryFormat(category.id));
            expect(selectedLink).toHaveStyle('fontWeight: 700');
          });
        });
      },
    );
  });
});
