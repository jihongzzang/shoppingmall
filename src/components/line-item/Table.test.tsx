import { render } from '../../test-helpers';

import Table from './Table';

import { LineItem } from '../../types';

import fixtures from '../../../fixtures';

import { numberFormat } from '../../utils';

const context = describe;

describe('LineItems', () => {
  context('when lineItems is empty', () => {
    const lineItems: LineItem[] = [];
    const totalPrice = 0;

    it('renders nothing', () => {
      const { container } = render(
        <Table lineItems={lineItems} totalPrice={totalPrice} />,
      );

      const lineItemTable = container.querySelector('table');

      expect(lineItemTable).not.toBeInTheDocument();
    });
  });

  context('when lineItems is not empty', () => {
    const { lineItems, totalPrice } = fixtures.cart;

    it('renders lineItems table', () => {
      const { container } = render(
        <Table lineItems={lineItems} totalPrice={totalPrice} />,
      );

      expect(container).toHaveTextContent(numberFormat(totalPrice));
    });
  });
});
