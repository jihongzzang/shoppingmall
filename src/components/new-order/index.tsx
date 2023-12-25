import { Heading, Flex } from '../ui';

import Table from '../line-item/Table';

import ShippingForm from './ShippingForm';

import PaymentButton from './PaymentButton';

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
      <PaymentButton cart={cart} />
    </Flex>
  );
}
