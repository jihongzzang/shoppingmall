import CATEGORY_IDS from '../constants/categoryId';

export default function categoryFormat(categoryId: string): string {
  if (categoryId === CATEGORY_IDS.top) return '상의';
  if (categoryId === CATEGORY_IDS.outer) return '아우터';
  if (categoryId === CATEGORY_IDS.bottom) return '하의';
  if (categoryId === CATEGORY_IDS.acc) return '악세사리';

  return '';
}
