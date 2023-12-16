import styled from 'styled-components';

import { Flex, Card, Text } from '../ui';

import { ProductSummary } from '../../types';

import { numberFormat } from '../../utils';

const ProuductCard = styled(Card)`
  :hover {
    scale: 1.02;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  transition: all ease-in 0.3s;
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
    <ProuductCard>
      <Flex direction="column" gap="2">
        <Thumbnail src={product.thumbnail.url} />
        <Text as="p" variant="body_01">
          {product.name}
        </Text>
        <Text as="span" variant="subhead_02">
          {numberFormat(product.price)}
        </Text>
      </Flex>
    </ProuductCard>
  );
}
