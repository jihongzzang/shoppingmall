import styled from 'styled-components';

import { Button as RadixButton } from '@radix-ui/themes';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
};

const Button = styled(RadixButton).attrs<ButtonProps>(({ type }) => ({
  type: type ?? 'button',
}))`
  cursor: pointer;

  :disabled {
    filter: grayscale(80%);
    cursor: not-allowed;
  }
`;

export default Button;
