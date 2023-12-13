import { useEffect } from 'react';

import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import { CategoriesStore } from '../stores';

export default function useFetchCategories() {
  const store = container.resolve(CategoriesStore);

  const [{ categories }] = useStore(store);

  useEffect(() => {
    store.fetchCategories();
  }, [store]);

  return { categories };
}
