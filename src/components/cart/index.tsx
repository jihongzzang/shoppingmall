import { Text } from '../ui';

import Table from '../Table';

import { Cart } from '../../types';

type CartViewProps = {
  cart: Cart;
};

export default function CartView({ cart }: CartViewProps) {
  if (!cart?.lineItems.length) {
    return (
      <Text as="p" variant="body_02">
        장바구니가 비었습니다.
      </Text>
    );
  }

  return <Table lineItems={cart.lineItems} totalPrice={cart.totalPrice} />;
}
