import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Product from './Product';

import { ProductSummary } from '../../types';

import PATHNAME from '../../constants/pathname';

const Container = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 20%;
    padding: 1rem;
  }

  a {
    display: block;
    text-decoration: none;
    overflow: hidden;
  }
`;

type ProductsProps = {
  products: ProductSummary[];
};

export default function Products({ products }: ProductsProps) {
  if (!products.length) {
    return null;
  }

  return (
    <Container>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`${PATHNAME.PRODUCTS}/${product.id}`}>
              <Product product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
