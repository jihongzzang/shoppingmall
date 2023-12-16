import { Flex, Heading } from '../components/ui';

import CartView from '../components/cart';

import useFetchCart from '../hooks/useFetchCart';

export default function CartPage() {
  const { cart } = useFetchCart();

  if (!cart) {
    return null;
  }

  return (
    <Flex direction="column" gap="5">
      <Heading as="h2" variant="heading_03">
        장바구니
      </Heading>
      <CartView cart={cart} />
    </Flex>
  );
}
