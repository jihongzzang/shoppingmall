import { ComboBox } from '../../ui/molecule';

import { ChangeFunction } from './types';

import { ProductOption, ProductOptionItem } from '../../../types';

type OptionProps = {
  option: ProductOption;
  selectedItem: ProductOptionItem;
  onChange: ChangeFunction;
};

export default function Option({
  option,
  selectedItem,
  onChange,
}: OptionProps) {
  const handleChange = (item: ProductOptionItem | null) => {
    if (!item) {
      return;
    }

    onChange({
      optionId: option.id,
      optionItemId: item.id,
    });
  };

  return (
    <ComboBox
      label={option.name}
      selectedItem={selectedItem}
      items={option.items}
      itemToId={(item) => item.id}
      itemToText={(item) => item.name}
      onChange={handleChange}
    />
  );
}
