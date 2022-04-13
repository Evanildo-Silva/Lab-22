import create from "zustand";
import { CartDataType } from "../../types/CartDataType";
import { ProductsType } from "../../types/TypeProducts";

export const useCart = create<CartDataType>((set) => ({
    cart: [],

    setCartProducts: (product: ProductsType) => {
        set(({ cart }) => {
        return {
            cart: [...cart, product],
        };
        });
    },

    handleAddProductsCart: (selectedProduct: ProductsType) => {
        set(({ cart }) => {
        const isProductInCart = cart.find(
            (product) => product.id === selectedProduct.id,
        );    
        if (isProductInCart) {
            return {
            cart: cart.map((product) =>
                product.id === selectedProduct.id
                ? { ...product, quantity: product.quantity + 1 }
                : product,
            ),
            };
        }
        return {
            cart: [...cart, { ...selectedProduct, quantity: 1}],
        };
        });
    },

    handleDeleteProductsCart: (selectedProduct: ProductsType) => {
        set(({ cart }: any) => {
        return cart.reduce(
            (data: ProductsType[], product: ProductsType) => {
            if (product.id === selectedProduct.id) {
                if (product.quantity === 1) return { cart: data };

                return {
                cart: [
                    ...data,
                    { ...product, quantity: product.quantity - 1 },
                ],
                };
            } else {
                return {
                cart: [...data, product],
                };
            }
            },
            [] as ProductsType[],
        );
        });
    },

    emptyCard: () => {
        set(({ cart }) => {
        return {
            cart: [],
        };
        });
    },
}));