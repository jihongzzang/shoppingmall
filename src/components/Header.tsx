import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import {
  Button, Flex, Heading, Link,
} from './ui';

import { apiService } from '../services/ApiService';

import useAccessToken from '../hooks/useAccessToken';

import useFetchCategories from '../hooks/useFetchCategories';

import useSelectedCategory from '../hooks/useSelectedCategory';

import PATHNAME from '../constants/pathname';

import { categoryFormat } from '../utils';

const navMainLinks = [
  { title: '홈', pathName: PATHNAME.HOME },
  { title: '전체', pathName: PATHNAME.PRODUCTS },
  { title: '장바구니', pathName: PATHNAME.CART },
  { title: '로그인', pathName: PATHNAME.LOGIN },
];

const Container = styled(Flex)`
  margin-bottom: 1.6rem;

  nav {
    display: flex;

    flex-direction: column;

    column-gap: 2.4rem;

    padding-block: 1.2rem 0.5rem;

    ul {
      width: fit-content;
      display: flex;
      column-gap: 2.4rem;
    }

    li {
      height: fit-content;
      padding-block: 1.5rem 0.6rem;
    }
  }
`;

const HeaderLink = styled(Link)`
  ${({ theme }) => theme.typography.body_03}

  white-space: nowrap;

  padding-block: 1.5rem 0.6rem;

  font-weight: ${({ selected }) => (selected ? 700 : 400)};

  border-bottom: ${({ theme, selected }) => (selected ? `3px solid ${theme.colors.blackA8}` : 'none')};

  color: ${({ theme, selected }) => (selected ? theme.colors.blackA8 : theme.colors.gray8)};
`;

export default function Header() {
  const navigate = useNavigate();

  const { accessToken, setAccessToken } = useAccessToken();

  const { categories } = useFetchCategories();

  const { selctedCategory } = useSelectedCategory();

  const handleClickLogout = async () => {
    await apiService.logout();

    setAccessToken('');

    navigate(PATHNAME.HOME);
  };

  return (
    <Container direction="column">
      <Heading variant="heading_03">Shop</Heading>

      <nav>
        <ul>
          {navMainLinks.slice(0, 2).map(({ title, pathName }) => (
            <li key={title}>
              <HeaderLink to={pathName} selected={title === selctedCategory}>
                {title}
              </HeaderLink>
            </li>
          ))}

          {accessToken ? (
            <>
              <li>
                <HeaderLink
                  to={navMainLinks[2].pathName}
                  selected={navMainLinks[2].title === selctedCategory}
                >
                  {navMainLinks[2].title}
                </HeaderLink>
              </li>
              <li>
                <Button onClick={handleClickLogout}>로그아웃</Button>
              </li>
            </>
          ) : (
            <li>
              <HeaderLink
                to={navMainLinks[3].pathName}
                selected={navMainLinks[3].title === selctedCategory}
              >
                {navMainLinks[3].title}
              </HeaderLink>
            </li>
          )}
        </ul>

        <ul>
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
