import { useEffect, useState } from 'react';

import { useLocation, useSearchParams } from 'react-router-dom';

import PATHNAME from '../constants/pathname';
import CATEGORY_IDS from '../constants/categoryId';

export default function useSelectedCategory() {
  const [selctedCategory, setSelectedCategory] = useState('');

  const { pathname } = useLocation();

  const [searchParam] = useSearchParams();

  useEffect(() => {
    if (pathname === PATHNAME.HOME) {
      setSelectedCategory('홈');
      return;
    }

    if (pathname.includes(PATHNAME.CART)) {
      setSelectedCategory('장바구니');
    }

    if (pathname === PATHNAME.PRODUCTS) {
      if (!searchParam.get('categoryId')) {
        setSelectedCategory('전체');
      } else if (searchParam.get('categoryId')) {
        if (searchParam.get('categoryId') === CATEGORY_IDS.top) {
          setSelectedCategory('상의');
        } else if (searchParam.get('categoryId') === CATEGORY_IDS.bottom) {
          setSelectedCategory('하의');
        } else if (searchParam.get('categoryId') === CATEGORY_IDS.outer) {
          setSelectedCategory('아우터');
        } else if (searchParam.get('categoryId') === CATEGORY_IDS.acc) {
          setSelectedCategory('악세사리');
        }
      } else {
        setSelectedCategory('전체');
      }
    }
  }, [pathname, searchParam.get('categoryId')]);

  return { selctedCategory };
}
