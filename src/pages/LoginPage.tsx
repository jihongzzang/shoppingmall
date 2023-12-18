import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/login';

import useLoginFormStore from '../hooks/useLoginFormStore';

export default function LoginPage() {
  const navigate = useNavigate();

  const [{ accessToken }, store] = useLoginFormStore();

  useEffect(() => {
    store.reset();
  }, []);

  useEffect(() => {
    if (accessToken) {
      store.reset();
      navigate('/');
    }
  }, [accessToken]);

  return <LoginForm />;
}
