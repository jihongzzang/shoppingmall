import fixtures from '../../fixtures';

import ProductFormStore from './ProductFormStore';

const addProductToCart = jest.fn();

jest.mock('../services/ApiService', () => ({
  get apiService() {
    return {
      addProductToCart,
    };
  },
}));

const context = describe;

describe('ProductFormStore', () => {
  let store: ProductFormStore;

  beforeEach(() => {
    jest.clearAllMocks();

    store = new ProductFormStore();
  });

  describe('setProduct', () => {
    const [product] = fixtures.products;

    it('sets state', () => {
      store.setProduct(product);

      expect(store.product).toBe(product);
      expect(store.selectedOptionItems).toHaveLength(product.options.length);
      expect(store.quantity).toBe(1);
    });
  });

  describe('changeOptionItem', () => {
    const [product] = fixtures.products;
    const [, option] = product.options;

    beforeEach(() => {
      store.setProduct(product);
    });

    context('with correct Ids', () => {
      it('sets option item', () => {
        const prevItems = store.selectedOptionItems;

        store.changeOptionItem({
          optionId: option.id,
          optionItemId: option.items[1].id,
        });

        expect(store.selectedOptionItems).toEqual([
          prevItems[0],
          {
            id: option.items[1].id,
            name: option.items[1].name,
          },
        ]);
      });
    });

    context('with incorrect Ids', () => {
      it("doesn't change anything", () => {
        const prevItems = store.selectedOptionItems;

        store.changeOptionItem({
          optionId: option.id,
          optionItemId: 'xxx',
        });

        expect(store.selectedOptionItems).toEqual(prevItems);
      });
    });
  });

  describe('changeQuantity', () => {
    context('with correct value', () => {
      it('change quantity', () => {
        store.changeQuantity(3);

        expect(store.quantity).toBe(3);
      });
    });

    context('with incorrect value', () => {
      it("doesn't change quantity", () => {
        store.changeQuantity(-1);
        store.changeQuantity(11);

        expect(store.quantity).toBe(1);
      });
    });
  });

  describe('addToCart', () => {
    const [product] = fixtures.products;

    beforeEach(() => {
      store.setProduct(product);
    });

    it('calls "addProductToCart" request', () => {
      store.addToCart();

      expect(addProductToCart).toBeCalled();
    });
  });
});
