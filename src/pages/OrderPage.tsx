import { Flex, Heading } from '../components/ui';

import OrderForm from '../components/new-order';

import useFetchCart from '../hooks/useFetchCart';

export default function OrderPage() {
  const { cart } = useFetchCart();

  if (!cart) {
    return null;
  }

  return (
    <Flex direction='column' gap='5'>
      <Heading as='h2' variant='heading_03'>
        장바구니
      </Heading>
      <OrderForm cart={cart} />
    </Flex>
  );
}
