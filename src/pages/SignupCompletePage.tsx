import styled from 'styled-components';

import {
  CheckCircledIcon, Flex, Heading, Text,
} from '../components/ui';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-inline: auto;

  width: 37.5rem;
  margin-top: 4.8rem;

  h2 {
    margin-bottom: 4.8rem;
  }
`;

export default function SignupCompletePage() {
  return (
    <Container>
      <Heading as="h2" variant="heading_03">
        회원 가입 완료
      </Heading>

      <Flex gap="1" align="center">
        <CheckCircledIcon color="green" width="2.4rem" height="2.4rem" />
        <Text as="p" variant="body_03">
          성공적으로 가입이 완료되었습니다.
        </Text>
      </Flex>
    </Container>
  );
}
