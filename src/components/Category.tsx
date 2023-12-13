import { Link } from 'react-router-dom';

import PATHNAME from '../constants/pathname';

import { Category } from '../types';

type CategoryProps = {
  category: Category;
};

export default function Category({ category }: CategoryProps) {
  if (!category) return null;

  const { id, name } = category;

  return (
    <li key={id}>
      <Link to={`${PATHNAME.PRODUCTS}?categoryId=${id}`}>{name}</Link>
    </li>
  );
}
