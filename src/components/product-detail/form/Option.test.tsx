import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { render } from '../../../test-helpers';

import Option from './Option';

import fixtures from '../../../../fixtures';

const [product] = fixtures.products;

const context = describe;

describe('Option', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when selection is changed', () => {
    it("calls 'handleChange action", async () => {
      const handleChange = jest.fn();

      const [option] = product.options;
      const [, item] = option.items;

      const selectedItem = option.items[0];

      render(
        <Option
          option={option}
          selectedItem={selectedItem}
          onChange={handleChange}
        />,
      );

      const combobox = screen.getByRole('combobox');

      await userEvent.click(combobox);

      const element = screen.getByRole('option', { name: item.name });

      await userEvent.click(element);

      expect(handleChange).toHaveBeenCalledWith({
        optionId: option.id,
        optionItemId: item.id,
      });
    });
  });
});
