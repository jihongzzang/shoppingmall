import { renderHook } from '@testing-library/react';

import { useLocation, useSearchParams } from 'react-router-dom';

import useSelectedCategory from './useSelectedCategory';

import PATHNAME from '../constants/pathname';

import CATEGORY_IDS from '../constants/categoryId';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
  useSearchParams: jest.fn(),
}));

const context = describe;

describe('useSelectedCategory', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context(`when pathname is ${PATHNAME.HOME}`, () => {
    it('should return "홈"', () => {
      (useLocation as jest.Mock).mockReturnValue({ pathname: PATHNAME.HOME });
      (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams()]);

      const { result } = renderHook(() => useSelectedCategory());

      expect(result.current.selctedCategory).toBe('홈');
    });
  });

  context(`when pathname is ${PATHNAME.LOGIN}`, () => {
    it('should return "로그인"', () => {
      (useLocation as jest.Mock).mockReturnValue({ pathname: PATHNAME.LOGIN });
      (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams()]);

      const { result } = renderHook(() => useSelectedCategory());

      expect(result.current.selctedCategory).toBe('로그인');
    });
  });

  context(`when pathname is ${PATHNAME.CART}`, () => {
    it('should return "장바구니"', () => {
      (useLocation as jest.Mock).mockReturnValue({
        pathname: PATHNAME.CART,
      });
      (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams()]);
      const { result } = renderHook(() => useSelectedCategory());

      expect(result.current.selctedCategory).toBe('장바구니');
    });
  });

  context(`when pathname is ${PATHNAME.ORDERS}`, () => {
    it('should return "주문목록"', () => {
      (useLocation as jest.Mock).mockReturnValue({
        pathname: PATHNAME.ORDERS,
      });
      (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams()]);

      const { result } = renderHook(() => useSelectedCategory());

      expect(result.current.selctedCategory).toBe('주문목록');
    });
  });

  context(`when pathname is ${PATHNAME.PRODUCTS}`, () => {
    context('categoryID does not exist', () => {
      it("should return '전체'", () => {
        (useLocation as jest.Mock).mockReturnValue({
          pathname: PATHNAME.PRODUCTS,
        });
        (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams()]);

        const { result } = renderHook(() => useSelectedCategory());

        expect(result.current.selctedCategory).toBe('전체');
      });
    });

    context(`categoryID is ${CATEGORY_IDS.top}`, () => {
      it("should return '상의'", () => {
        (useLocation as jest.Mock).mockReturnValue({
          pathname: PATHNAME.PRODUCTS,
        });
        (useSearchParams as jest.Mock).mockReturnValue([
          new URLSearchParams({ categoryId: CATEGORY_IDS.top }),
        ]);

        const { result } = renderHook(() => useSelectedCategory());

        expect(result.current.selctedCategory).toBe('상의');
      });
    });

    context(`categoryID is ${CATEGORY_IDS.outer}`, () => {
      it("should return '아우터'", () => {
        (useLocation as jest.Mock).mockReturnValue({
          pathname: PATHNAME.PRODUCTS,
        });
        (useSearchParams as jest.Mock).mockReturnValue([
          new URLSearchParams({ categoryId: CATEGORY_IDS.outer }),
        ]);

        const { result } = renderHook(() => useSelectedCategory());

        expect(result.current.selctedCategory).toBe('아우터');
      });
    });

    context(`categoryID is ${CATEGORY_IDS.bottom}`, () => {
      it("should return '하의'", () => {
        (useLocation as jest.Mock).mockReturnValue({
          pathname: PATHNAME.PRODUCTS,
        });
        (useSearchParams as jest.Mock).mockReturnValue([
          new URLSearchParams({ categoryId: CATEGORY_IDS.bottom }),
        ]);

        const { result } = renderHook(() => useSelectedCategory());

        expect(result.current.selctedCategory).toBe('하의');
      });
    });

    context(`categoryID is ${CATEGORY_IDS.acc}`, () => {
      it("should return '악세사리'", () => {
        (useLocation as jest.Mock).mockReturnValue({
          pathname: PATHNAME.PRODUCTS,
        });
        (useSearchParams as jest.Mock).mockReturnValue([
          new URLSearchParams({ categoryId: CATEGORY_IDS.acc }),
        ]);

        const { result } = renderHook(() => useSelectedCategory());

        expect(result.current.selctedCategory).toBe('악세사리');
      });
    });
  });
});
