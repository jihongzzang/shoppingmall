import { Link } from 'react-router-dom';

import { Table } from '../ui';

import Options from './Options';

import { LineItem } from '../../types';

import { numberFormat } from '../../utils';

type LineItemViewProps = {
  lineItem: LineItem;
};

export default function LineItemView({ lineItem }: LineItemViewProps) {
  if (!lineItem?.id) return null;

  return (
    <Table.Row>
      <Table.Cell>
        <Link to={`/products/${lineItem.product.id}`}>
          {lineItem.product.name}
        </Link>
        <Options options={lineItem.options} />
      </Table.Cell>
      <Table.Cell>{`${numberFormat(lineItem.unitPrice)}원`}</Table.Cell>
      <Table.Cell>{lineItem.quantity}</Table.Cell>
      <Table.Cell>{`${numberFormat(lineItem.totalPrice)}원`}</Table.Cell>
    </Table.Row>
  );
}
