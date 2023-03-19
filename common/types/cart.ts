export type CartItemType = {
  quantity: number;
  title: string;
  price: number;
};

export type CartListType = Array<CartItemType>;

export type CartStoreType = {
  productList: Array<CartItemType>;
  isCartPaid: boolean;
  setCartPaid: (b: boolean) => void;
  addProductToCart: (productData: CartItemType) => void;
  setProductList: (newProductList: Array<CartItemType>) => void;
  clearProductList: () => void;
};
