import { Minus, Plus } from "@phosphor-icons/react";

import * as S from "./style";

interface IQuantityInputProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export function QuantityInput(props: Readonly<IQuantityInputProps>) {
  const { quantity, incrementQuantity, decrementQuantity } = props;

  return (
    <S.Container>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </S.Container>
  );
}
