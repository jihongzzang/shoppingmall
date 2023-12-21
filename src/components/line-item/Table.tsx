import styled from 'styled-components';

import LineItemView from './LineItemView';

import { LineItem } from '../../types';

import { numberFormat } from '../../utils';

import { Table as StyledTable } from '../ui';

const TableContainer = styled.div`
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

const tableHeads = ['제품', '단가', '수량', '금액'];

type TableProps = {
  lineItems: LineItem[];
  totalPrice: number;
};

export default function Table({ lineItems, totalPrice }: TableProps) {
  if (!lineItems.length) {
    return null;
  }

  return (
    <TableContainer>
      <StyledTable.Root>
        <StyledTable.Header>
          <StyledTable.Row>
            {tableHeads.map((item) => (
              <StyledTable.ColumnHeaderCell key={item}>
                {item}
              </StyledTable.ColumnHeaderCell>
            ))}
          </StyledTable.Row>
        </StyledTable.Header>

        <StyledTable.Body>
          {lineItems.map((lineItem) => (
            <LineItemView key={lineItem.id} lineItem={lineItem} />
          ))}
        </StyledTable.Body>

        <tfoot>
          <StyledTable.Row>
            <StyledTable.Cell colSpan={3}>합계</StyledTable.Cell>
            <StyledTable.Cell>{numberFormat(totalPrice)}</StyledTable.Cell>
          </StyledTable.Row>
        </tfoot>
      </StyledTable.Root>
    </TableContainer>
  );
}
