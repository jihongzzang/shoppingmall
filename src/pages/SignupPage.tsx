import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import SignupForm from '../components/signup';

import useSignupFormStore from '../hooks/useSignupFormStore';

import PATHNAME from '../constants/pathname';

export default function SignupPage() {
  const navigate = useNavigate();

  const [{ accessToken }, store] = useSignupFormStore();

  useEffect(() => {
    store.reset();
  }, []);

  useEffect(() => {
    if (accessToken) {
      store.reset();
      navigate(PATHNAME.SIGNUP_COMPLETE);
    }
  }, [accessToken]);

  return <SignupForm />;
}
