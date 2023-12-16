import styled, { DefaultTheme } from 'styled-components';

import { Heading as RadixHeading, Text as RadixText } from '@radix-ui/themes';

export const Heading = styled(RadixHeading)<{
  variant?: keyof DefaultTheme['typography'];
  color?: keyof DefaultTheme['colors'];
}>`
  ${({ theme, variant }) => (variant ? theme.typography[variant] : theme.typography.body_01)}
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.blackA10)}
`;

export const Text = styled(RadixText)<{
  variant?: keyof DefaultTheme['typography'];
  color?: keyof DefaultTheme['colors'];
}>`
  ${({ theme, variant }) => (variant ? theme.typography[variant] : theme.typography.body_01)}
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.blackA10)}
`;
