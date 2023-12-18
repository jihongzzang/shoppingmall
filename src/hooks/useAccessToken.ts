import { useEffect } from 'react';

import { useLocalStorage } from 'usehooks-ts';

import { apiService } from '../services/ApiService';

/** hide Access Token and AccessToken Mangement */
export default function useAccessToken() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    apiService.setAccessToken(accessToken);
  }, [accessToken]);

  return { accessToken, setAccessToken };
}
