import { useEffect } from 'react';

import styled from 'styled-components';

import {
  Button, Card, Flex, Heading, Link, Text,
} from '../ui';

import { TextBox } from '../ui/molecule';

import useAccessToken from '../../hooks/useAccessToken';

import useLoginFormStore from '../../hooks/useLoginFormStore';

import PATHNAME from '../../constants/pathname';

const Container = styled(Flex)`
  margin-inline: auto;

  width: 37.5rem;

  p {
    margin-block: 1rem;
  }
`;

const SignInSignUpWrapper = styled(Flex)`
  margin-block: 1.6rem;

  button,
  a {
    height: 4rem;
    flex: 1;
  }
`;

const RegisterLink = styled(Link)`
  display: block;

  ${({ theme }) => theme.typography.body_02}
  line-height: 4rem;
  text-align: center;

  background: ${({ theme }) => theme.colors.blackA10};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 0.4rem;

  :hover {
    opacity: 0.8;
  }
`;

const FormWrraper = styled(Card)`
  .rt-CardInner {
    padding: 1.6rem;
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 1px;
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
    <Container direction="column" gap="4">
      <Heading as="h2" variant="heading_03">
        로그인
      </Heading>
      <FormWrraper>
        <form onSubmit={handleSubmit}>
          <TextBox
            label="이메일"
            placeholder="tester@example.com"
            value={email}
            onChange={handleChangeEmail}
          />
          <TextBox
            label="비밀번호"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
          <SignInSignUpWrapper align="center" gap="4">
            <Button type="submit" disabled={!valid}>
              로그인
            </Button>
            <RegisterLink to={PATHNAME.SIGNUP}>회원 가입</RegisterLink>
          </SignInSignUpWrapper>

          {error && (
            <Text as="p" variant="body_02">
              로그인 실패
            </Text>
          )}
        </form>
      </FormWrraper>
    </Container>
  );
}
