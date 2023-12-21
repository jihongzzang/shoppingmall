import { useParams } from 'react-router-dom';

import { Text } from '../components/ui';

import ProductDetail from '../components/product-detail';

import useFetchProduct from '../hooks/useFetchProduct';

export default function ProductDetailPage() {
  const { id } = useParams();

  const { loading, error } = useFetchProduct({ productId: String(id) });

  if (loading) {
    return (
      <Text as="p" variant="body_02">
        Loading...
      </Text>
    );
  }

  if (error) {
    return (
      <Text as="p" variant="body_02">
        Error!
      </Text>
    );
  }

  return <ProductDetail />;
}
