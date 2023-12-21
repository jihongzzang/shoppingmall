import { useEffect } from 'react';

import styled from 'styled-components';

import {
  Button, Card, CrossCircledIcon, Flex, Heading, Text,
} from '../ui';

import { TextBox } from '../ui/molecule';

import useAccessToken from '../../hooks/useAccessToken';

import useSignupFormStore from '../../hooks/useSignupFormStore';

const Container = styled(Flex)`
  margin-inline: auto;

  width: 37.5rem;

  form > button {
    width: 100%;
  }

  form > button {
    width: 100%;
  }

  form > p {
    margin-block: 1.6rem;
    text-align: center;
  }

  .errorMessagesWrraper {
    margin-block: 1.6rem;
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

  button {
    height: 4rem;
    margin-block: 1.6rem;
  }
`;

export default function SignupForm() {
  const { setAccessToken } = useAccessToken();

  const [
    {
      email, name, password, passwordConfirmation, valid, error, accessToken,
    },
    store,
  ] = useSignupFormStore();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  const handleChangeEmail = (value: string) => {
    store.changeEmail(value);
  };

  const handleChangeName = (value: string) => {
    store.changeName(value);
  };

  const handleChangePassword = (value: string) => {
    store.changePassword(value);
  };

  const handleChangePasswordConfirmation = (value: string) => {
    store.changePasswordConfirmation(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.signup();
  };

  return (
    <Container direction="column">
      <Heading as="h2" variant="heading_03">
        회원 가입
      </Heading>

      <FormWrraper>
        <form onSubmit={handleSubmit}>
          <TextBox
            label="이메일"
            placeholder="tester@example.com"
            value={email}
            onChange={handleChangeEmail}
          />

          <TextBox label="이름" value={name} onChange={handleChangeName} />

          <TextBox
            label="비밀번호"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />

          <TextBox
            label="비밀번호 확인"
            type="password"
            value={passwordConfirmation}
            onChange={handleChangePasswordConfirmation}
          />

          <Button type="submit" disabled={!valid}>
            회원 가입
          </Button>

          {error && (
            <Flex className="errorMessagesWrraper" align="center" gap="1">
              <CrossCircledIcon color="red" width="2rem" height="2rem" />
              <Text as="p" variant="body_02" color="red10">
                회원 가입에 실패했습니다.
              </Text>
            </Flex>
          )}
        </form>
      </FormWrraper>
    </Container>
  );
}
