import categoryFormat from './categoryFormat';

import CATEGORY_IDS from '../constants/categoryId';

const context = describe;

describe('categoryFormat', () => {
  context('when categoryID is top', () => {
    it('return "상의"', () => {
      expect(categoryFormat(CATEGORY_IDS.top)).toBe('상의');
    });
  });

  context('when categoryID is outer', () => {
    it('return "아우터"', () => {
      expect(categoryFormat(CATEGORY_IDS.outer)).toBe('아우터');
    });
  });

  context('when categoryID is bottom', () => {
    it('return "하의"', () => {
      expect(categoryFormat(CATEGORY_IDS.bottom)).toBe('하의');
    });
  });

  context('when categoryID is acc', () => {
    it('return "악세사리"', () => {
      expect(categoryFormat(CATEGORY_IDS.acc)).toBe('악세사리');
    });
  });

  context('when categoryID is unknown', () => {
    it('return ""', () => {
      expect(categoryFormat('unknown')).toBe('');
    });
  });
});
