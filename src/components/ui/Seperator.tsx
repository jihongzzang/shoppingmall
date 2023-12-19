import styled, { DefaultTheme } from 'styled-components';

const Seperator = styled.div<{
  width?: React.CSSProperties['height'];
  height: React.CSSProperties['height'];
  bgColor: DefaultTheme['colors'];
}>`
  min-width: ${({ width }) => width || '100%'};
  min-height: ${({ height }) => height || '1px'};
  background: ${({ bgColor }) => bgColor || 'transparent'};
`;

export default Seperator;
