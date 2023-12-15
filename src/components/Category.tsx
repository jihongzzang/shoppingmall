import { Link } from 'react-router-dom';

import styled from 'styled-components';
import PATHNAME from '../constants/pathname';

import { Category } from '../types';

import { categoryFormat } from '../utils';

const StyledNavLink = styled(Link)<{ selected: boolean }>`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
`;

type CategoryProps = {
  category: Category;
};

export default function Category({ category }: CategoryProps) {
  if (!category) return null;

  const { id } = category;

  return (
    <li key={id}>
      <Link to={`${PATHNAME.PRODUCTS}?categoryId=${id}`}>
        {categoryFormat(id)}
      </Link>
    </li>
  );
}
