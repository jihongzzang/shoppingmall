import styled from 'styled-components';

import { Button, Flex, Text } from '../ui';

import { TextBox } from '../ui/molecule';

import useOrderFormStore from '../../hooks/useOrderFormStore';

const Container = styled(Flex)`
  > div {
    max-width: 50rem;
  }

  h3 {
    font-size: 2rem;
  }
`;

const PostalCodeField = styled(Flex)`
  > div {
    display: inline-block;
    margin-right: 1rem;
  }

  button {
    margin-top: 2.3rem;
  }
`;

export default function ShippingForm() {
  const [{ name, address1, address2, postalCode, phoneNumber }, store] =
    useOrderFormStore();

  const handleClickSearchPostalCode = () => {
    //
  };

  const handleChangeName = (value: string) => {
    store.changeName(value);
  };

  const handleChangeAddress1 = (value: {
    address: string;
    postalCode: string;
  }) => {
    store.changeAddress1(value.address, value.postalCode);
  };

  const handleChangeAddress2 = (value: string) => {
    store.changeAddress2(value);
  };

  const handleChangePhoneNumber = (value: string) => {
    store.changePhoneNumber(value);
  };

  return (
    <Container direction='column'>
      <Text as='h3' variant='body_03'>
        받는 사람
      </Text>

      <TextBox
        label='이름'
        placeholder='받는 분 이름'
        value={name}
        onChange={handleChangeName}
      />

      <PostalCodeField align='center'>
        <TextBox label='우편번호' value={postalCode} readOnly />
        <Button variant='solid' onClick={handleClickSearchPostalCode}>
          우편번호 검색
        </Button>
      </PostalCodeField>

      <TextBox label='주소' value={address1} readOnly />

      <TextBox
        label='상세 주소'
        value={address2}
        onChange={handleChangeAddress2}
      />

      <TextBox
        label='전화번호'
        type='tel'
        value={phoneNumber}
        onChange={handleChangePhoneNumber}
      />
    </Container>
  );
}
