import styled from 'styled-components';

import Link from './Link';

const HeaderLink = styled(Link)`
  ${({ theme }) => theme.typography.body_03}

  padding-block: 1.5rem 0.6rem;

  border-bottom: ${({ theme, selected }) => (selected ? `3px solid ${theme.colors.blackA8}` : 'none')};

  color: ${({ theme, selected }) => (selected ? theme.colors.blackA8 : theme.colors.gray8)};
`;

export default HeaderLink;
