import { Fragment } from "react";
import { Trash } from "@phosphor-icons/react";

import { QuantityInput } from "src/components/Form/QuantityInput";

import { useCart } from "src/hooks/useCart";
import { coffees } from "../../../../../data.json";

import * as S from "./styles";

const shippingPrice = 3.5;

export function OrderSummary() {
  const { cart, removeItem, incrementItemQuantity, decrementItemQuantity } =
    useCart();

  const coffeeInfoMap = new Map(coffees.map((coffee) => [coffee.id, coffee]));

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffeeInfoMap.get(item.id);

    if (!coffeeInfo) throw new Error("Invalid coffee.");
    else return { ...coffeeInfo, quantity: item.quantity };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId);
  }

  return (
    <S.Container>
      <h2>Selected Coffees</h2>

      <S.CartTotal>
        {coffeesInCart.map((coffee) => (
          <Fragment key={coffee.id}>
            <S.Coffee>
              <div>
                <img src={coffee.image} alt={coffee.title} />

                <div>
                  <span>{coffee.title}</span>

                  <S.CoffeeInfo>
                    <QuantityInput
                      quantity={coffee.quantity}
                      incrementQuantity={() => handleItemIncrement(coffee.id)}
                      decrementQuantity={() => handleItemDecrement(coffee.id)}
                    />

                    <button onClick={() => handleItemRemove(coffee.id)}>
                      <Trash />
                      <span>Remove</span>
                    </button>
                  </S.CoffeeInfo>
                </div>
              </div>

              <aside>${coffee.price?.toFixed(2)}</aside>
            </S.Coffee>

            <span />
          </Fragment>
        ))}

        <S.CartTotalInfo>
          <div>
            <span>Total items</span>
            <span>
              {new Intl.NumberFormat("en-US", {
                currency: "USD",
                style: "currency",
              }).format(totalItemsPrice)}
            </span>
          </div>

          <div>
            <span>Delivery</span>
            <span>
              {new Intl.NumberFormat("en-US", {
                currency: "USD",
                style: "currency",
              }).format(shippingPrice)}
            </span>
          </div>

          <div>
            <span>Total</span>
            <span>
              {new Intl.NumberFormat("en-US", {
                currency: "USD",
                style: "currency",
              }).format(totalItemsPrice + shippingPrice)}
            </span>
          </div>
        </S.CartTotalInfo>

        <S.CheckoutButton type="submit" form="order">
          Confirm order
        </S.CheckoutButton>
      </S.CartTotal>
    </S.Container>
  );
}
