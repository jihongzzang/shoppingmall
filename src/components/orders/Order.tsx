import styled from 'styled-components';

import { OrderSummary } from '../../types';

import { numberFormat } from '../../utils';

const Container = styled.div`
  line-height: 1.5;
`;

type OrderProps = {
  order: OrderSummary;
};

export default function Order({ order }: OrderProps) {
  const {
    orderedAt, id, title, totalPrice,
  } = order;

  return (
    <Container>
      <div>{`주문 일시: ${orderedAt}`}</div>
      <div>{`주문 코드: ${id}`}</div>
      <div>{`상품: ${title}`}</div>
      <div>{`결제 금액: ${numberFormat(totalPrice)}원`}</div>
    </Container>
  );
}
