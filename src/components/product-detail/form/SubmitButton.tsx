import { Button } from '../../ui';

import useProductFormStore from '../../../hooks/useProductFormStore';

export default function SubmitButton() {
  const [{ done }, store] = useProductFormStore();

  const handleClick = () => {
    store.addToCart();
  };

  if (done) {
    return <p>장바구니에 담았습니다.</p>;
  }

  return (
    <Button variant="solid" size="4" color="red" onClick={handleClick}>
      장바구니에 담기
    </Button>
  );
}
