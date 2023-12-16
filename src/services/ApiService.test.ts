import fixtures from '../../fixtures';

import ApiService from './ApiService';

const context = describe;

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
  });

  test('fetchCategories', async () => {
    const categories = await apiService.fetchCategories();

    expect(categories).not.toHaveLength(0);
  });

  describe('fetchProducts', () => {
    context('without category ID', () => {
      it('return all Products', async () => {
        const products = await apiService.fetchProducts();

        expect(products).not.toHaveLength(0);
      });
    });

    context('with category ID', () => {
      it('return Products', async () => {
        const { id } = fixtures.categories[0];

        const products = await apiService.fetchProducts({
          categoryId: id,
        });

        expect(products).not.toHaveLength(0);
      });
    });
  });

  test('fetchProduct', async () => {
    const { id } = fixtures.products[0];

    const product = await apiService.fetchProduct({ productId: id });

    expect(product.id).toEqual(id);
  });

  test('fetchCart', async () => {
    const cart = await apiService.fetchCart();

    expect(cart.lineItems).not.toHaveLength(0);
  });

  test('addProductToCart', async () => {
    const [product] = fixtures.products;

    const [option] = product.options;
    const [, item] = option.items;

    await apiService
      .addProductToCart({
        productId: product.id,
        options: [{ id: option.id, itemId: item.id }],
        quantity: 1,
      })
      .then(() => {
        expect(true).toBe(true);
      });
  });
});
