import styled from 'styled-components';

import Table from '../line-item/Table';

import { OrderDetail } from '../../types';

import STATUS_MESSAGES from '../../constants/statusMessages';

const Container = styled.div`
  dl {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.7;

    dt {
      width: 8rem;
    }

    dd {
      width: calc(100% - 8rem);
    }
  }
`;

type OrderProps = {
  order: OrderDetail;
};

export default function Order({ order }: OrderProps) {
  if (!order.lineItems.length) {
    return null;
  }

  const { orderedAt, id, status } = order;

  return (
    <Container>
      <dl>
        <dt>주문 일시</dt>
        <dd>{orderedAt}</dd>
        <dt>주문 코드</dt>
        <dd>{id}</dd>
        <dt>처리상태</dt>
        <dd>{STATUS_MESSAGES[status]}</dd>
      </dl>
      <Table lineItems={order.lineItems} totalPrice={order.totalPrice} />
    </Container>
  );
}
