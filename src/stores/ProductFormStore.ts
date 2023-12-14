import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';
import { apiService } from '../services/ApiService';
import { ProductDetail, ProductOptionItem, nullProductDetail } from '../types';

@singleton()
@Store()
export default class ProductFormStore {
  product: ProductDetail = nullProductDetail;

  selectedOptionItems: ProductOptionItem[] = [];

  quantity = 1;

  done = false;

  async addToCart() {
    this.resetDone();

    await apiService.addProductToCart({
      productId: this.product.id,
      options: this.product.options.map((option, index) => ({
        id: option.id,
        itemId: this.selectedOptionItems[index].id,
      })),
      quantity: this.quantity,
    });

    this.complete();
  }

  @Action()
  setProduct(product: ProductDetail) {
    this.product = product;
    this.selectedOptionItems = this.product.options.map((i) => i.items[0]);
    this.quantity = 1;
    this.done = false;
  }

  @Action()
  changeQuantity(quantity: number) {
    if (quantity <= 0) return;

    if (quantity > 10) return;

    this.quantity = quantity;
  }

  @Action()
  resetDone() {
    this.done = false;
  }

  @Action()
  complete() {
    this.quantity = 1;
    this.done = true;
  }

  @Action()
  changeOptionItem({
    optionId,
    optionItemId,
  }: {
    optionId: string;
    optionItemId: string;
  }) {
    this.selectedOptionItems = this.product.options.map((option, index) => {
      const item = this.selectedOptionItems[index];
      return option.id !== optionId
        ? item
        : option.items.find((i) => i.id === optionItemId) ?? option.items[0];
    });
  }

  get price() {
    return this.product.price * this.quantity;
  }
}
