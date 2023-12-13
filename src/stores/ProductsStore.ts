import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import { apiService } from '../services/ApiService';

import { ProductSummary } from '../types';

@singleton()
@Store()
export default class ProductsStore {
  products: ProductSummary[] = [];

  async fetchProducts({ categoryId }: { categoryId?: string }) {
    this.setProducts([]);

    const products = await apiService.fetchProducts({ categoryId });

    this.setProducts(products);
  }

  @Action()
  private setProducts(products: ProductSummary[]) {
    this.products = products;
  }
}
