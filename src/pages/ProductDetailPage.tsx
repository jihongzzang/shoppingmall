import { useParams } from 'react-router-dom';

import ProductDetail from '../components/product-detail/ProductDetail';

import useFetchProduct from '../hooks/useFetchProduct';

export default function ProductDetailPage() {
  const { id } = useParams();

  const { loading, error } = useFetchProduct({ productId: String(id) });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return <ProductDetail />;
}
