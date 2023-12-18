import ApiService from './ApiService';

import fixtures from '../../fixtures';

import { ErrorReponse, transformError } from './apiUtils';

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

  describe('fetchProduct', () => {
    context('with an invalid product ID', () => {
      it('should return a 404 error', async () => {
        let errorResponse: ErrorReponse | null = null;

        try {
          await apiService.fetchProduct({ productId: 'xxx' });
        } catch (error) {
          errorResponse = transformError(error);
        }

        expect(errorResponse).not.toBeNull();
        expect(errorResponse?.status).toBe(404);
      });
    });

    context('with a valid product ID', () => {
      const { id } = fixtures.products[0];

      it('should return the detailed product information', async () => {
        const product = await apiService.fetchProduct({ productId: id });

        expect(product.id).toEqual(id);
      });
    });
  });

  test('addProductToCart', async () => {
    const [product] = fixtures.products;

    const [option] = product.options;
    const [, item] = option.items;

    await apiService.addProductToCart({
      productId: product.id,
      options: [{ id: option.id, itemId: item.id }],
      quantity: 1,
    });
  });

  test('fetchCart', async () => {
    const cart = await apiService.fetchCart();

    expect(cart.lineItems).not.toHaveLength(0);
  });
});
