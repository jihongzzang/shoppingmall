import { useEffect } from 'react';

import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import { OrderListStore } from '../stores';

export default function useFetchOrderList() {
  const store = container.resolve(OrderListStore);

  const [{ orders }] = useStore(store);

  useEffect(() => {
    store.fetchOrders();
  }, [store]);

  return { orders };
}
