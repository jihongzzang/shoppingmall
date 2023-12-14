import { screen } from '@testing-library/react';

import { render } from '../../utils/test-helpers';

import LineItemView from './LineItemView';

import { LineItem } from '../../types';

import fixtures from '../../../fixtures';

const context = describe;

describe('LineItemView', () => {
  context('when lineItem is empty', () => {
    const lineItem: LineItem = {} as LineItem;

    it('renders nothing', () => {
      const { container } = render(<LineItemView lineItem={lineItem} />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  context('when options is not empty', () => {
    const [lineItem] = fixtures.cart.lineItems;

    it('renders lineItem', () => {
      render(
        <table>
          <tbody>
            <LineItemView lineItem={lineItem} />
          </tbody>
        </table>,
      );

      const productName = lineItem.product.name;

      screen.getByText(new RegExp(productName));
    });
  });
});
