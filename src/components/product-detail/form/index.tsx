import { Link } from 'react-router-dom';
import { Flex, Text } from '../../ui';

import Options from './Options';

import Quantity from './Quantity';

import Price from './Price';

import SubmitButton from './SubmitButton';

import useAccessToken from '../../../hooks/useAccessToken';

import PATHNAME from '../../../constants/pathname';

export default function AddToCartForm() {
  const { accessToken } = useAccessToken();

  if (!accessToken) {
    return (
      <Flex direction="column">
        <Text as="p">
          주문하려면
          {' '}
          <Link to={PATHNAME.LOGIN}>로그인</Link>
          하세요
        </Text>
      </Flex>
    );
  }

  return (
    <Flex direction="column">
      <Options />
      <Quantity />
      <Price />
      <SubmitButton />
    </Flex>
  );
}
