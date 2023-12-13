import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Category from './Category';

import useFetchCategories from '../hooks/useFetchCategories';

const Container = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 4rem;
  }

  nav {
    padding-block: 2rem;

    ul {
      display: flex;
    }

    li {
      margin-right: 2rem;
    }

    .active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default function Header() {
  const { categories } = useFetchCategories();

  return (
    <Container>
      <h1>Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          {!!categories.length && (
            <ul>
              {categories.map((category) => (
                <Category key={category.id} category={category} />
              ))}
            </ul>
          )}

          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
