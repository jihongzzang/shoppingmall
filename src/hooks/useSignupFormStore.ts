import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import { SignupFormStore } from '../stores';

export default function useSignupFormStore() {
  const store = container.resolve(SignupFormStore);

  return useStore(store);
}
