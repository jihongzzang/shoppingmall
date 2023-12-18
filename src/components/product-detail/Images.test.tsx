import { screen } from '@testing-library/react';

import { render } from '../../test-helpers';

import Images from './Images';

import { Image } from '../../types';

import fixtures from '../../../fixtures';

const context = describe;

const [products] = fixtures.products;

describe('Images', () => {
  context('when images is empty', () => {
    const images: Image[] = [];

    it('renders nothing', () => {
      const { container } = render(<Images images={images} />);

      const img = container.querySelector('img');

      expect(img).not.toBeInTheDocument();
    });
  });

  context('when images is not empty', () => {
    const images: Image[] = [{ url: products.images[0].url }];

    it('renders image', () => {
      render(<Images images={images} />);

      screen.getByRole('img');
    });
  });
});
