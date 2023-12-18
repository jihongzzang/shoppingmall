import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import Options from './Options';

import fixtures from '../../../../fixtures';

import { render } from '../../../test-helpers';

const [product] = fixtures.products;

const { options } = product;

const store = {
  product,
  selectedOptionItems: options.map((i) => i.items[0]),
  quantity: 1,
  changeOptionItem: jest.fn(),
};

jest.mock('../../../hooks/useProductFormStore', () => () => [store, store]);

const context = describe;

describe('Options', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders comboboxes', () => {
    render(<Options />);

    expect(screen.getAllByRole('combobox')).toHaveLength(options.length);
  });

  context('when selection is changed', () => {
    it("calls 'changeOptionItem action'", async () => {
      render(<Options />);

      const [option] = product.options;
      const [, item] = option.items;

      const [combobox] = screen.getAllByRole('combobox');

      await userEvent.click(combobox);

      const element = screen.getByRole('option', { name: item.name });

      await userEvent.click(element);

      expect(store.changeOptionItem).toBeCalledWith({
        optionId: option.id,
        optionItemId: item.id,
      });
    });
  });
});
