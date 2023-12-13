import styled from 'styled-components';

import { numberFormat } from '../../utils';

import { ProductSummary } from '../../types';

const Continer = styled.div`
  word-break: keep-all;
`;

const Thumbnail = styled.img.attrs({ alt: 'Thumbnail' })`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
`;

type ProductProps = {
  product: ProductSummary;
};

export default function Product({ product }: ProductProps) {
  return (
    <Continer>
      <Thumbnail src={product.thumbnail.url} />
      <div>{product.name}</div>
      <div>{numberFormat(product.price)}</div>
    </Continer>
  );
}
