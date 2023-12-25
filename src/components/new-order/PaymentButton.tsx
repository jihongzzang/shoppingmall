import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Text, Button } from '../ui';

import useOrderFormStore from '../../hooks/useOrderFormStore';

import usePayment from '../../hooks/usePayment';

import { Cart } from '../../types';

import PATHNAME from '../../constants/pathname';

type PaymentButtonProps = {
  cart: Cart;
};

export default function PaymentButton({ cart }: PaymentButtonProps) {
  const navigate = useNavigate();

  const [{ valid }, store] = useOrderFormStore();

  const { requestPayment } = usePayment(cart);

  const [error, setError] = useState('');

  const handleClick = async () => {
    setError('');

    try {
      const { merchantId, transactionId } = await requestPayment();

      await store.order({ merchantId, transactionId });

      navigate(PATHNAME.ORDER_COMPLETE);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <div>
      <Button size='4' onClick={handleClick} disabled={!valid}>
        결제
      </Button>

      {error && (
        <Text as='p' variant='body_02' color='red10'>
          {error}
        </Text>
      )}
    </div>
  );
}
