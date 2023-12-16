import { Button, Flex, Text } from '../../ui';

import useProductFormStore from '../../../hooks/useProductFormStore';

import CheckCircledIcon from '../../ui/Icon';

export default function SubmitButton() {
  const [{ done }, store] = useProductFormStore();

  const handleClick = () => {
    store.addToCart();
  };

  if (done) {
    return (
      <Flex align="center" gap="2">
        <CheckCircledIcon color="green" width="2rem" height="2rem" />
        <Text as="p" variant="body_04">
          장바구니에 담았습니다.
        </Text>
      </Flex>
    );
  }

  return (
    <Button variant="solid" size="4" color="red" onClick={handleClick}>
      장바구니에 담기
    </Button>
  );
}
