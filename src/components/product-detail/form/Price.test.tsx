import { screen } from '@testing-library/react';

import { container } from 'tsyringe';

import { render } from '../../../test-helpers';

import Price from './Price';

import { ProductFormStore } from '../../../stores';

import fixtures from '../../../../fixtures';

const [product] = fixtures.products;

describe('Price', () => {
  const quantity = 2;

  beforeEach(() => {
    const productFormStore = container.resolve(ProductFormStore);

    productFormStore.setProduct(product);

    productFormStore.changeQuantity(quantity);
  });

  it('renders price as formatted number', () => {
    render(<Price />);

    screen.getByText(/256,000원/);
  });
});
