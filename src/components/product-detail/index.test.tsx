import { screen } from '@testing-library/react';

import { container } from 'tsyringe';

import { render } from '../../test-helpers';

import { ProductDetailStore } from '../../stores';

import ProductDetail from '.';

import fixtures from '../../../fixtures';

const [product] = fixtures.products;

// const { options } = product;

// jest.mock('../../hooks/useProductDetailStore', () => () => [{ product }]);

// jest.mock('../../hooks/uuseProductFormStore', () => () => [
//   { options, selectedOptionItems: options.map((i) => i.items[0]), quantity: 1 },
// ]);

// test('ProductDetail', async () => {
//   render(<ProductDetail />);

//   screen.getByText(product.name);
// });

test('ProductDetail', async () => {
  const store = container.resolve(ProductDetailStore);

  await store.fetchProduct({ productId: product.id });

  render(<ProductDetail />);

  screen.getByText(product.name);
});
