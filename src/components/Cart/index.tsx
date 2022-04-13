import { CloseOutline } from "@styled-icons/evaicons-outline";

import Button from "../Button";
import Typography from "../Typography";

import { Wrapper, Subtotal, Header } from "./styles";
import { MenuPaymentProps } from "../../types/MenuPaymentProps";
import { useCart } from "../../contexts/contextsCart";
import { ProductsType } from "../../types/TypeProducts";
import { FormatPrice } from "../../utils/FormatPrice";

export const MenuPayment = ({ isOpen, setIsOpen }: MenuPaymentProps) => {
  const { cart, emptyCard } = useCart();
  const calculateProducts = (items: ProductsType[]) => {
    return items.reduce(
      (acc: number, item) => acc + item.quantity * item.price,
      0,
    );
  };
  const finished = () => {
		emptyCard();
		setIsOpen(false);
		alert("Compra finalizada com sucesso!");
	}
    return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <Typography level={5} size="large" fontWeight={600}>
          Produtos no carrinho
        </Typography>
        <CloseOutline onClick={() => setIsOpen(false)} />
      </Header>
      <Subtotal>
        <Typography level={5} size="large" fontWeight={600}>
          Total
        </Typography>
        <Typography>
        {FormatPrice(calculateProducts(cart))}
        </Typography>
      </Subtotal>

      <Button onClick={finished} fullWidth>Finalizar compra</Button>
    </Wrapper>
  )
};

export default MenuPayment;
