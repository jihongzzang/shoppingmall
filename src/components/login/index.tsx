import { useEffect } from 'react';

import styled from 'styled-components';

import { Button, Flex, Heading } from '../ui';

import { TextBox } from '../ui/molecule';

import useAccessToken from '../../hooks/useAccessToken';

import useLoginFormStore from '../../hooks/useLoginFormStore';

const Container = styled(Flex)`
  p {
    margin-block: 1rem;
  }
`;

export default function LoginForm() {
  const { setAccessToken } = useAccessToken();

  const [{
    email, password, valid, error, accessToken,
  }, store] = useLoginFormStore();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  const handleChangeEmail = (value: string) => {
    store.changeEmail(value);
  };

  const handleChangePassword = (value: string) => {
    store.changePassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.login();
  };

  return (
    <Container direction="column">
      <Heading as="h2" variant="heading_03">
        로그인
      </Heading>
      <form onSubmit={handleSubmit}>
        <TextBox
          label="E-mail"
          placeholder="tester@example.com"
          value={email}
          onChange={handleChangeEmail}
        />
        <TextBox
          label="Password"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <Button type="submit" disabled={!valid}>
          로그인
        </Button>
        {error && <p>로그인 실패</p>}
      </form>
    </Container>
  );
}
