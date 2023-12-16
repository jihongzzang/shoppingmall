import { Flex } from '../../ui';

import Options from './Options';

import Quantity from './Quantity';

import Price from './Price';

import SubmitButton from './SubmitButton';

export default function AddToCartForm() {
  return (
    <Flex direction="column">
      <Options />
      <Quantity />
      <Price />
      <SubmitButton />
    </Flex>
  );
}
