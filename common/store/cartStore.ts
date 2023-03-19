import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItemType, CartStoreType } from '../types/cart';

export const useCartStore = create<any>(
  persist(
    (set) => ({
      productList: [],
      isCartPaid: false,
      setCartPaid: (b: boolean) =>
        set(() => ({
          isCartPaid: b,
        })),
      addProductToCart: (productData: CartItemType) =>
        set((state: CartStoreType) => ({
          productList: [...state.productList, productData],
        })),
      setProductList: (newProductList: Array<CartItemType>) => {
        set(() => ({
          productList: newProductList,
        }));
      },
      clearProductList: () =>
        set(() => ({
          productList: [],
        })),
    }),
    {
      name: 'product-list',
      getStorage: () => ({
        getItem: async (name) => localStorage.getItem(name),
        setItem: (name, value) => localStorage.setItem(name, value),
        removeItem: (name) => localStorage.removeItem(name),
      }),
    },
  ),
);
