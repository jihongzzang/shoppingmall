import { screen } from '@testing-library/react';

import { render } from '../../test-helpers';

import Product from './Product';

import fixtures from '../../../fixtures';

const [product] = fixtures.products;

describe('Product', () => {
  const productSummary = {
    id: product.id,
    category: product.category,
    thumbnail: { url: product.images[0].url },
    name: product.name,
    price: product.price,
  };

  it('renders Product', () => {
    render(<Product product={productSummary} />);

    screen.getByText(new RegExp(product.name));
  });
});
