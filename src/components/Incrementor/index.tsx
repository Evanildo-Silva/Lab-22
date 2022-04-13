import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { IncrementorProps } from "../../types/IncrementorProps";

import { Wrapper, IconWrapper, Quantity } from "./styles";

const Incrementor = ({
  quantity,
  onClickAddProductCart,
  onClickWithdrawProductCart,
}: IncrementorProps) => (
  <Wrapper>
    <IconWrapper>
      <SubtractIcon onClick={onClickWithdrawProductCart} aria-label="Subtract item" />
    </IconWrapper>

    <Quantity>{quantity}</Quantity>

    <IconWrapper>
      <PlusIcon onClick={onClickAddProductCart} aria-label="Add item" />
    </IconWrapper>
  </Wrapper>
);

export default Incrementor;
