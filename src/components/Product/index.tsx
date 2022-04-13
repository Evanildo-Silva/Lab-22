import { useEffect, useState } from "react";
import { useCart } from "../../contexts/contextsCart";
import { ProductProps } from "../../types/ProductProps";
import { ProductsType } from "../../types/TypeProducts";
import { FormatPrice } from "../../utils/FormatPrice";
import Button from "../Button";
import Incrementor from "../Incrementor";

import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export const Product = ({
	product,
}: ProductProps) => {
	const { cart, handleAddProductsCart, handleDeleteProductsCart } = useCart();
  
  const getQuantityProduct = (cart: ProductsType[]) => {
    let quantity = 0;
    cart.forEach((item) => {
      if (item.id === product.id) {
        quantity = item.quantity;
      }
    });
    return quantity;
  };
  
  const quantityProduct = getQuantityProduct(cart)

  useEffect(() => {}, [cart]);
  
  return (
    <Wrapper>
      <img src={product.picture} alt={`Imagem de referência ${product.name}`} />

      <Info>
        <Column>
          <Text>{product.name}</Text>
          <Text>{FormatPrice(product.price)}</Text>
        </Column>

        <WrapperIncrementor>
          {quantityProduct > 0 ? (
            <Incrementor
            onClickAddProductCart={
                quantityProduct <= product.quantity
                  ? () => handleAddProductsCart(product)
                  : () => {`Sorry, empty stock! ${quantityProduct}`}
              }
              onClickWithdrawProductCart={() => handleDeleteProductsCart(product)}
              quantity={quantityProduct}
            />
          ) : (
            <Button
              onClick={() => handleAddProductsCart(product)}
            >
              PURCHASE
            </Button>
          )}
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  );
};
