import ApiService from './ApiService';

import fixtures from '../../fixtures';

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
    context('without category ID', () => {});

    context('with category ID', () => {});
  });
});
