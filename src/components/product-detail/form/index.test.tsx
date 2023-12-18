import { container } from 'tsyringe';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { render } from '../../../test-helpers';

import { ProductDetailStore } from '../../../stores';

import AddToCartForm from '.';

import fixtures from '../../../../fixtures';

test('AddToCartForm', async () => {
  container.clearInstances();

  const [product] = fixtures.products;

  const productDetailStore = container.resolve(ProductDetailStore);

  await productDetailStore.fetchProduct({ productId: product.id });

  render(<AddToCartForm />);

  fireEvent.click(screen.getByText('장바구니에 담기'));

  await waitFor(() => {
    screen.getByText(/장바구니에 담았습니다/);
  });
});
