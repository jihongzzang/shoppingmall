import { screen } from '@testing-library/react';

import { render } from '../../test-helpers';

import fixtures from '../../../fixtures';

import Description from './Description';

const context = describe;

const [products] = fixtures.products;

describe('Description', () => {
  context('when text is empty', () => {
    const text = '';

    it('renders nothing', () => {
      const { container } = render(<Description value={text} />);

      const ul = container.querySelector('ul');

      expect(ul).not.toBeInTheDocument();
    });
  });

  context('when text is not empty', () => {
    const text = products.description;

    it('renders multi-line text', () => {
      render(<Description value={text} />);

      const listItems = screen.getAllByRole('listitem');

      expect(listItems).toHaveLength(3);
    });
  });
});
