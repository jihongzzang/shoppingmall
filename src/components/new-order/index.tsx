import { Heading, Flex } from '../ui';

import { Cart } from '../../types';
import Table from '../line-item/Table';

type OrderFormProps = {
  cart: Cart;
};

export default function OrderForm({ cart }: OrderFormProps) {
  const { lineItems, totalPrice } = cart;

  return (
    <Flex direction='column' gap='5'>
      <Heading as='h2' variant='heading_03'>
        주문
      </Heading>
      <Table lineItems={lineItems} totalPrice={totalPrice} />
    </Flex>
  );
}
