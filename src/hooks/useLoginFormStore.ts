import { useStore } from 'usestore-ts';

import { container } from 'tsyringe';

import { LoginFormStore } from '../stores';

export default function useLoginFormStore() {
  const store = container.resolve(LoginFormStore);

  return useStore(store);
}
