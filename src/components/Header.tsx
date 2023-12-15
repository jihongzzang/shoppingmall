import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Typography } from './ui';

import PATHNAME from '../constants/pathname';

import useFetchCategories from '../hooks/useFetchCategories';

import useSelectedCategory from '../hooks/useSelectedCategory';

import { categoryFormat } from '../utils';

const navMainLinks = [
  { title: '홈', pathName: PATHNAME.HOME },
  { title: '전체', pathName: PATHNAME.PRODUCTS },
  { title: '장바구니', pathName: PATHNAME.CART },
];

const Container = styled.div`
  margin-bottom: 1.6rem;

  nav {
    display: flex;

    flex-direction: column;

    padding-block: 2.4rem;

    ul {
      display: flex;
      column-gap: 2.4rem;
    }

    li {
      padding: 0.4rem;
    }

    .active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const StyledLink = styled(Link)<{ selected: boolean }>`
  ${({ theme }) => theme.typography.body_01}

  font-weight: ${({ selected }) => (selected ? 700 : 400)};

  color: ${({ theme, selected }) =>
    selected ? "theme.colors['gray-1000']" : theme.colors['gray-800']};
`;

export default function Header() {
  const { categories } = useFetchCategories();

  const { selctedCategory } = useSelectedCategory();

  return (
    <Container>
      <Typography as='h1' color='gray-1000' variant='heading_03'>
        Shop
      </Typography>

      <nav>
        <ul>
          {navMainLinks.map(({ title, pathName }) => (
            <li key={title}>
              <StyledLink to={pathName} selected={title === selctedCategory}>
                {title}
              </StyledLink>
            </li>
          ))}
        </ul>

        {!!categories.length && (
          <ul>
            {categories.map(({ id }) => {
              const title = categoryFormat(id);

              return (
                <li key={id}>
                  <StyledLink
                    to={`${PATHNAME.PRODUCTS}?categoryId=${id}`}
                    selected={title === selctedCategory}
                  >
                    {title}
                  </StyledLink>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </Container>
  );
}
