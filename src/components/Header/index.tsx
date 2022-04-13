import { ShoppingBagOutline as ShoppingIcon } from "styled-icons/evaicons-outline";
import { HeaderProps } from "../../types/HeaderProps";

import { Wrapper } from "./styles";

const Header = ({ setIsOpen }: HeaderProps) => (
  <Wrapper>
    <ShoppingIcon onClick={() => setIsOpen(true)} aria-label="Shopping Icon" />
  </Wrapper>
);

export default Header;
