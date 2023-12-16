import styled from 'styled-components';

import { Button, Flex, TextField } from '../../ui';

import useProductFormStore from '../../../hooks/useProductFormStore';

const FlexContainer = styled(Flex)`
  input {
    text-align: center;
  }
`;

export default function Quantity() {
  const [{ quantity }, store] = useProductFormStore();

  const handleClickDecrease = () => {
    store.changeQuantity(quantity - 1);
  };

  const handleClickIncrease = () => {
    store.changeQuantity(quantity + 1);
  };

  return (
    <FlexContainer gap="2">
      <Button
        variant="outline"
        color="red"
        size="2"
        onClick={handleClickDecrease}
      >
        -
      </Button>

      <TextField.Input
        variant="soft"
        color="red"
        size="2"
        type="text"
        readOnly
        value={quantity}
      />

      <Button
        variant="outline"
        color="red"
        size="2"
        onClick={handleClickIncrease}
      >
        +
      </Button>
    </FlexContainer>
  );
}
