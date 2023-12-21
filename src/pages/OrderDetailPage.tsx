import { useParams } from 'react-router-dom';

import { Text } from '../components/ui';

import Order from '../components/order';

import useFetchOrder from '../hooks/useFetchOrder';

export default function OrderDetailPage() {
  const params = useParams();

  const { order, loading, error } = useFetchOrder({
    orderId: String(params.id),
  });

  if (loading) {
    return (
      <Text as='p' variant='body_02'>
        Loading...
      </Text>
    );
  }

  if (error) {
    return (
      <Text as='p' variant='body_02'>
        Error!
      </Text>
    );
  }

  return <Order order={order} />;
}
