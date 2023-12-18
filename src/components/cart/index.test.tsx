import { screen } from '@testing-library/react';

import { render } from '../../test-helpers';

import CartView from '.';

import fixtures from '../../../fixtures';

const context = describe;

describe('CartView', () => {
  context('when the cart is empty', () => {
    const cart = {
      lineItems: [],
      totalPrice: 0,
    };
    it('renders empty message', () => {
      render(<CartView cart={cart} />);

      screen.getByText(/장바구니가 비었습니다./);
    });
  });

  context('when the cart has a line item', () => {
    const { cart } = fixtures;

    const productName = cart.lineItems[0].product.name;

    it('renders a line item', () => {
      render(<CartView cart={cart} />);

      screen.getByText(productName);
    });
  });
});
