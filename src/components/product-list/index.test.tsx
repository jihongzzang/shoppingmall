import { screen } from '@testing-library/react';

import { render } from '../../test-helpers';

import Products from '.';

import fixtures from '../../../fixtures';

const { products } = fixtures;

describe('Products', () => {
  const productSummaries = products.map((product) => ({
    id: product.id,
    category: product.category,
    thumbnail: { url: product.images[0].url },
    name: product.name,
    price: product.price,
  }));

  it('renders Products', () => {
    render(<Products products={productSummaries} />);

    screen.getByText(new RegExp(products[0].name));
  });
});
