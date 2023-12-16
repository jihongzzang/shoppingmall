import styled from 'styled-components';

import {
  Table as RadixTable,
  TableRoot as RadixTableRoot,
  TableHeader as RadixTableHeader,
  TableBody as RadixTableBody,
  TableCell as RadixTableCell,
  TableRow as RadixTableRow,
  TableColumnHeaderCell as RadixTableColumnHeaderCell,
  TableRowHeaderCell as RadixTableRowHeaderCell,
} from '@radix-ui/themes';

export const TableRoot = styled(RadixTableRoot)`
  * {
    box-shadow: none;
  }
`;

export const TableHeader = styled(RadixTableHeader)``;

export const TableBody = styled(RadixTableBody)``;

export const TableCell = styled(RadixTableCell)``;

export const TableRow = styled(RadixTableRow)``;

export const TableColumnHeaderCell = styled(RadixTableColumnHeaderCell)``;

export const TableRowHeaderCell = styled(RadixTableRowHeaderCell)``;

export const Table = Object.assign(RadixTable, {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Cell: TableCell,
  Row: TableRow,
  ColumnHeaderCell: TableColumnHeaderCell,
  RowHeaderCell: TableRowHeaderCell,
});
