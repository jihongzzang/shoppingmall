import styled from 'styled-components';

import { Button as RadixButton } from '@radix-ui/themes';

const Button = styled(RadixButton).attrs({
  type: 'button',
})`
  cursor: pointer;
`;

export default Button;
