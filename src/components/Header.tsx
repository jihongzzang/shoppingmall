import styled from 'styled-components';

import { Flex, Heading, Link } from './ui';

import PATHNAME from '../constants/pathname';

import useFetchCategories from '../hooks/useFetchCategories';

import useSelectedCategory from '../hooks/useSelectedCategory';

import { categoryFormat } from '../utils';

const navMainLinks = [
  { title: '홈', pathName: PATHNAME.HOME },
  { title: '전체', pathName: PATHNAME.PRODUCTS },
  { title: '장바구니', pathName: PATHNAME.CART },
];

const Container = styled(Flex)`
  margin-bottom: 1.6rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};

  nav {
    display: flex;

    column-gap: 2.4rem;

    padding-block: 2.4rem 0.5rem;

    ul {
      display: flex;
      column-gap: 2.4rem;
    }
  }
`;

const HeaderLink = styled(Link)`
  ${({ theme }) => theme.typography.body_03}

  padding-block: 1.5rem 0.6rem;

  border-bottom: ${({ theme, selected }) => (selected ? `3px solid ${theme.colors.blackA8}` : 'none')};

  color: ${({ theme, selected }) => (selected ? theme.colors.blackA8 : theme.colors.gray8)};
`;

export default function Header() {
  const { categories } = useFetchCategories();

  const { selctedCategory } = useSelectedCategory();

  return (
    <Container direction="column">
      <Heading variant="heading_03">Shop</Heading>

      <nav>
        <ul>
          {navMainLinks.map(({ title, pathName }) => (
            <li key={title}>
              <HeaderLink to={pathName} selected={title === selctedCategory}>
                {title}
              </HeaderLink>
            </li>
          ))}
          {!!categories.length
            && categories.map(({ id }) => {
              const title = categoryFormat(id);

              return (
                <li key={id}>
                  <HeaderLink
                    to={`${PATHNAME.PRODUCTS}?categoryId=${id}`}
                    selected={title === selctedCategory}
                  >
                    {title}
                  </HeaderLink>
                </li>
              );
            })}
        </ul>
      </nav>
    </Container>
  );
}
