import { useEffect } from 'react';

import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import { OrderDetailStore } from '../stores';

export default function useFetchOrder({ orderId }: { orderId: string }) {
  const store = container.resolve(OrderDetailStore);

  const [{ order, loading, error }] = useStore(store);

  console.log(store);

  useEffect(() => {
    store.fetchOrder({ orderId });
  }, [store]);

  return { order, loading, error };
}
