import { Dispatch, SetStateAction } from "react";

export type MenuPaymentProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  };