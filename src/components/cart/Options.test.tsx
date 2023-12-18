import { render } from '../../test-helpers';

import Options from './Options';

import { OrderOption } from '../../types';

import fixtures from '../../../fixtures';

const context = describe;

describe('Options', () => {
  context('when options is empty', () => {
    const options: OrderOption[] = [];

    it('renders nothing', () => {
      const { container } = render(<Options options={options} />);

      const option = container.querySelector('p');

      expect(option).not.toBeInTheDocument();
    });
  });

  context('when options is not empty', () => {
    const [lineItem] = fixtures.cart.lineItems;
    const { options } = lineItem;

    it('renders options text', () => {
      const { container } = render(<Options options={options} />);

      const optionName = options[0].name;
      const itemName = options[0].item.name;

      const targetText = `${optionName}: ${itemName}`;

      expect(container).toHaveTextContent(targetText);
    });
  });
});
