import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

const Link = styled(RouterLink)<{ selected?: boolean }>`
  text-decoration: none;
`;

export default Link;
