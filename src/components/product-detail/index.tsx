import styled from 'styled-components';

import { Flex } from '@radix-ui/themes';
import Images from './Images';

import AddToCartForm from './form';

import Description from './Description';

import useProductDetailStore from '../../hooks/useProductDetailStore';
import { Heading } from '../ui';

const Container = styled(Flex)`
  aside {
    width: 50%;
    padding-right: 3%;
  }

  article {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding-left: 3%;
    width: 50%;

    ::before {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      border-left: 1px solid ${({ theme }) => theme.colors.gray3};
    }
  }
`;

export default function ProductDetail() {
  const [{ product }] = useProductDetailStore();

  return (
    <Container justify="between" gap="4">
      <aside>
        <Images images={product.images} />
      </aside>
      <article>
        <Heading as="h2" variant="body_02">
          {product.name}
        </Heading>
        <AddToCartForm />
        <Description value={product.description} />
      </article>
    </Container>
  );
}
