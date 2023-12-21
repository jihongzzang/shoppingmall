import { Heading, Flex } from '../components/ui';

import Orders from '../components/orders';

import useFetchOrderList from '../hooks/useFetchOrderList';

export default function OrderListPage() {
  const { orders } = useFetchOrderList();

  return (
    <Flex direction="column" gap="5">
      <Heading as="h2" variant="heading_03">
        주문목록
      </Heading>
      <Orders orders={orders} />
    </Flex>
  );
}
