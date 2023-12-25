import styled from 'styled-components';

import Order from './Order';

import { OrderSummary } from '../../types';

import { Link } from '../ui';

import PATHNAME from '../../constants/pathname';

const Container = styled.div`
  li {
    margin-block: 0.5rem;
    padding: 1rem;
    background: #eee;
  }

  a {
    text-decoration: none;
  }
`;

type OrdersProps = {
  orders: OrderSummary[];
};

export default function Orders({ orders }: OrdersProps) {
  if (!orders.length) {
    return null;
  }

  return (
    <Container>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <Link to={`${PATHNAME.ORDERS}/${order.id}`}>
              <Order order={order} />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
