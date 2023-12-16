import styled from 'styled-components';

import { Flex, Text } from '../../ui';

import useProductFormStore from '../../../hooks/useProductFormStore';

import { numberFormat } from '../../../utils';

const PriceText = styled(Text)``;

export default function Price() {
  const [, productFormStore] = useProductFormStore();

  return (
    <Flex direction="column" my="4">
      <Text as="span" variant="body_01" color="gray10">
        구매가
      </Text>
      <PriceText as="p" variant="heading_03">
        {`${numberFormat(productFormStore.price)}원`}
      </PriceText>
    </Flex>
  );
}
