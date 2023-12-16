import styled from 'styled-components';

import { Text, Table } from '../ui';

import LineItemView from './LineItemView';

import { Cart } from '../../types';

import { numberFormat } from '../../utils';

const Container = styled.div`
  table {
    width: 100%;
  }

  th,
  td {
    text-align: left;
  }

  th {
    border-top: 1px solid ${({ theme }) => theme.colors.gray3};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
  }

  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
  }

  tfoot > tr > td {
    border-bottom: none;
  }
`;

type CartViewProps = {
  cart: Cart;
};

const tableHeads = ['제품', '단가', '수량', '금액'];

export default function CartView({ cart }: CartViewProps) {
  if (!cart?.lineItems.length) {
    return <Text as="p">장바구니가 비었습니다.</Text>;
  }

  return (
    <Container>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            {tableHeads.map((item) => (
              <Table.ColumnHeaderCell key={item}>{item}</Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cart.lineItems.map((lineItem) => (
            <LineItemView key={lineItem.id} lineItem={lineItem} />
          ))}
        </Table.Body>

        <tfoot>
          <Table.Row>
            <Table.Cell colSpan={3}>합계</Table.Cell>
            <Table.Cell>{numberFormat(cart.totalPrice)}</Table.Cell>
          </Table.Row>
        </tfoot>
      </Table.Root>
    </Container>
  );
}
