import { Flex } from '../../ui';

import Option from './Option';

import useProductFormStore from '../../../hooks/useProductFormStore';

import { ChangeFunction } from './types';

export default function Options() {
  const [{ product, selectedOptionItems }, store] = useProductFormStore();

  const handleChange: ChangeFunction = ({ optionId, optionItemId }) => {
    store.changeOptionItem({ optionId, optionItemId });
  };

  if (!product.options.length) return null;

  return (
    <Flex direction="column" gap="2" my="3">
      {product.options.map((option, index) => (
        <Option
          key={option.id}
          option={option}
          selectedItem={selectedOptionItems[index]}
          onChange={handleChange}
        />
      ))}
    </Flex>
  );
}
