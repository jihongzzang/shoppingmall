import styled from 'styled-components';

import LineItemView from './LineItemView';

import { Cart } from '../../types';

import { numberFormat } from '../../utils';

const Container = styled.div`
  table {
    width: 100%;
  }

  th,
  td {
    padding: 0.5rem;
    text-align: left;
  }
`;

type CartViewProps = {
  cart: Cart;
};

const tableHeads = ['제품', '단가', '수량', '금액'];

export default function CartView({ cart }: CartViewProps) {
  if (!cart?.lineItems.length) {
    return <p>장바구니가 비었습니다.</p>;
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            {tableHeads.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cart.lineItems.map((lineItem) => (
            <LineItemView key={lineItem.id} lineItem={lineItem} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={3}>합계</th>
            <td>{numberFormat(cart.totalPrice)}</td>
          </tr>
        </tfoot>
      </table>
    </Container>
  );
}
