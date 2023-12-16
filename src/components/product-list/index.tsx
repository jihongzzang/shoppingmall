import { Grid, Link } from '../ui';

import Product from './Product';

import { ProductSummary } from '../../types';

import PATHNAME from '../../constants/pathname';

type ProductsProps = {
  products: ProductSummary[];
};

export default function Products({ products }: ProductsProps) {
  if (!products.length) {
    return null;
  }

  return (
    <Grid
      columns={{
        xs: '2',
        sm: '2',
        md: '3',
        lg: '4',
        xl: '5',
      }}
      gap="4"
      width="auto"
    >
      {products.map((product) => (
        <Link to={`${PATHNAME.PRODUCTS}/${product.id}`} key={product.id}>
          <Product product={product} />
        </Link>
      ))}
    </Grid>
  );
}
