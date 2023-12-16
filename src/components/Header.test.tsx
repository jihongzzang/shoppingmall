import { screen } from '@testing-library/react';

import { render } from '../utils/test-helpers';

import Header from './Header';

jest.mock('../hooks/useFetchCategories', () => () => ({
  categories: [],
}));

test('Header', () => {
  render(<Header />);

  screen.getByText(/Shop/);
  screen.getByRole('link', { name: '홈' });
  screen.getByRole('link', { name: '전체' });
  screen.getByRole('link', { name: '장바구니' });
});
