import styled from 'styled-components';

import {
  CheckCircledIcon, Flex, Heading, Link, Text,
} from '../components/ui';

import PATHNAME from '../constants/pathname';

const Container = styled(Flex)`
  margin-inline: auto;

  width: 37.5rem;
  margin-top: 4.8rem;

  h2 {
    margin-bottom: 4.8rem;
  }
`;

export default function OrderCompletePage() {
  return (
    <Container direction="column" justify="center">
      <Heading as="h2" variant="heading_03">
        주문 완료
      </Heading>

      <Flex gap="1" align="center">
        <CheckCircledIcon color="green" width="2.4rem" height="2.4rem" />
        <Text as="p" variant="body_03">
          주문이 완료되었습니다.
        </Text>
      </Flex>
      <Text as="p" variant="body_03">
        <Link to={PATHNAME.ORDERS}>주문 목록 확인</Link>
      </Text>
    </Container>
  );
}
