import { ProductsType } from "../TypeProducts";

export type CartDataType = {
    cart: ProductsType[];
    setCartProducts: (product: ProductsType) => void;
    handleAddProductsCart: (selectedProduct: ProductsType) => void;
    handleDeleteProductsCart: (selectedProduct: ProductsType) => void;
    emptyCard: () => void;
  };