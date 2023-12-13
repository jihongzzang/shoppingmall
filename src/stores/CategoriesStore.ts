import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import { apiService } from '../services/ApiService';

import { Category } from '../types';

@singleton()
@Store()
export default class CategoriesStore {
  categories: Category[] = [];

  async fetchCategories() {
    this.setCategories([]);

    const categories = await apiService.fetchCategories();

    this.setCategories(categories);
  }

  @Action()
  setCategories(categories: Category[]) {
    this.categories = categories;
  }
}
