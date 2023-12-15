import styled, { DefaultTheme } from 'styled-components';

const Typography = styled.span<{
  variant: keyof DefaultTheme['typography'];
  color?: keyof DefaultTheme['colors'];
}>`
  ${({ theme, variant }) => (variant ? theme.typography[variant] : theme.typography.body_01)};
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors['gray-1000'])};
`;
export default Typography;
