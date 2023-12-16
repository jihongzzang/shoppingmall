import { useSearchParams } from 'react-router-dom';

import { Flex } from '@radix-ui/themes';

import { Heading } from '../components/ui';

import Products from '../components/product-list';

import useFetchProducts from '../hooks/useFetchProducts';

import { categoryFormat } from '../utils';

export default function ProductListPage() {
  const [params] = useSearchParams();

  const categoryId = params.get('categoryId') ?? undefined;

  const { products } = useFetchProducts({ categoryId });

  return (
    <Flex direction="column" gap="5">
      <Heading as="h2" variant="heading_03">
        {categoryId ? categoryFormat(categoryId) : '상품'}
      </Heading>
      <Products products={products} />
    </Flex>
  );
}
