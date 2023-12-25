import styled from 'styled-components';

import { Button as RadixButton } from '@radix-ui/themes';

const Button = styled(RadixButton).attrs(({ type }) => ({
  type: type ?? 'button',
}))`
  cursor: pointer;

  :disabled {
    filter: grayscale(80%);
    cursor: not-allowed;
  }
`;

export default Button;
