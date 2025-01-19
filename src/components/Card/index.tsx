import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { CheckFat, ShoppingCart } from "@phosphor-icons/react";

import { useCart } from "src/hooks/useCart";
import { QuantityInput } from "../Form/QuantityInput";

import * as S from "./styles";

interface ICoffee {
  id: string;
  title: string;
  price: number;
  image: string;
  tags: string[];
  description: string;
}

interface ICardProps {
  coffee: ICoffee;
}

export function Card({ coffee }: Readonly<ICardProps>) {
  const theme = useTheme();
  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) setQuantity((state) => state - 1);
  }

  function handleAddItem() {
    setQuantity(1);
    setIsItemAdded(true);
    addItem({ id: coffee.id, quantity });
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isItemAdded]);

  return (
    <S.Container>
      <S.CoffeeImg src={coffee.image} alt={coffee.title} />

      <S.Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </S.Tags>

      <S.Title>{coffee.title}</S.Title>

      <S.Description>{coffee.description}</S.Description>

      <S.Control>
        <S.Price>
          <span>$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </S.Price>

        <S.Order $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckFat
                size={22}
                weight="fill"
                color={theme.colors["base-card"]}
              />
            ) : (
              <ShoppingCart size={22} color={theme.colors["base-card"]} />
            )}
          </button>
        </S.Order>
      </S.Control>
    </S.Container>
  );
}
