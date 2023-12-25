import { Heading, Flex, Button } from '../ui';

import Table from '../line-item/Table';

import ShippingForm from './ShippingForm';

import { Cart } from '../../types';

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
      <ShippingForm />
      <Button size='4'>주문하기</Button>
    </Flex>
  );
}
