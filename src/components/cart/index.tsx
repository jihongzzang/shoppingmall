import { useNavigate } from 'react-router-dom';

import { Button, Text } from '../ui';

import Table from '../line-item/Table';

import { Cart } from '../../types';

import PATHNAME from '../../constants/pathname';

type CartViewProps = {
  cart: Cart;
};

export default function CartView({ cart }: CartViewProps) {
  const navigate = useNavigate();

  if (!cart?.lineItems.length) {
    return (
      <Text as='p' variant='body_02'>
        장바구니가 비었습니다.
      </Text>
    );
  }

  const handleClick = () => {
    navigate(PATHNAME.ORDER);
  };

  return (
    <div>
      <Table lineItems={cart.lineItems} totalPrice={cart.totalPrice} />
      <Button size='3' onClick={handleClick} color='gray'>
        주문하기
      </Button>
    </div>
  );
}
