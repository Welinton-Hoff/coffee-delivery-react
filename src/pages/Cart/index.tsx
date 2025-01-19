import { Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from "@phosphor-icons/react";

import { coffees } from "../../../data.json";
import { useCart } from "../../hooks/useCart";
import { QuantityInput } from "../../components/Form/QuantityInput";
import { TextInput } from "../../components/Form/TextInput";
import { Radio } from "../../components/Form/Radio";
import * as S from "./styles";

type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = z.object({
  cep: z.number({ invalid_type_error: "Enter the ZIP code" }),
  street: z.string().min(1, "Enter the street"),
  number: z.string().min(1, "Enter the number"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Enter the neighborhood"),
  city: z.string().min(1, "Enter the city"),
  state: z.string().min(1, "Enter the state"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Select a payment method",
  }),
});

export type OrderInfo = z.infer<typeof newOrder>;

const shippingPrice = 3.5;

export function Cart() {
  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCart();

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error("Invalid coffee.");
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  const selectedPaymentMethod = watch("paymentMethod");

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId);
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert("You need to have at least one item in the cart");
    }

    checkout(data);
  };

  return (
    <S.Container>
      <S.InfoContainer>
        <h2>Complete your order</h2>

        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <S.AddressContainer>
            <S.AddressHeading>
              <MapPin size={22} />

              <div>
                <span>Delivery Address</span>

                <p>Enter the address where you want to receive your order</p>
              </div>
            </S.AddressHeading>

            <S.AddressForm>
              <TextInput
                placeholder="ZIP Code"
                type="number"
                containerProps={{ style: { gridArea: "cep" } }}
                error={errors.cep}
                {...register("cep", { valueAsNumber: true })}
              />

              <TextInput
                placeholder="Street"
                containerProps={{ style: { gridArea: "street" } }}
                error={errors.street}
                {...register("street")}
              />

              <TextInput
                placeholder="Number"
                containerProps={{ style: { gridArea: "number" } }}
                error={errors.number}
                {...register("number")}
              />

              <TextInput
                placeholder="Complement"
                optional
                containerProps={{ style: { gridArea: "fullAddress" } }}
                error={errors.fullAddress}
                {...register("fullAddress")}
              />

              <TextInput
                placeholder="Neighborhood"
                containerProps={{ style: { gridArea: "neighborhood" } }}
                error={errors.neighborhood}
                {...register("neighborhood")}
              />

              <TextInput
                placeholder="City"
                containerProps={{ style: { gridArea: "city" } }}
                error={errors.city}
                {...register("city")}
              />

              <TextInput
                placeholder="State"
                maxLength={2}
                containerProps={{ style: { gridArea: "state" } }}
                error={errors.state}
                {...register("state")}
              />
            </S.AddressForm>
          </S.AddressContainer>

          <S.PaymentContainer>
            <S.PaymentHeading>
              <CurrencyDollar size={22} />

              <div>
                <span>Payment</span>

                <p>
                  Payment is made upon delivery. Choose the method you want to
                  pay
                </p>
              </div>
            </S.PaymentHeading>

            <S.PaymentOptions>
              <div>
                <Radio
                  isSelected={selectedPaymentMethod === "credit"}
                  {...register("paymentMethod")}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Credit Card</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === "debit"}
                  {...register("paymentMethod")}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Debit Card</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === "cash"}
                  {...register("paymentMethod")}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Cash</span>
                </Radio>
              </div>

              {errors.paymentMethod ? (
                <S.PaymentErrorMessage role="alert">
                  {errors.paymentMethod.message}
                </S.PaymentErrorMessage>
              ) : null}
            </S.PaymentOptions>
          </S.PaymentContainer>
        </form>
      </S.InfoContainer>

      <S.InfoContainer>
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
      </S.InfoContainer>
    </S.Container>
  );
}
