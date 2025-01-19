import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { DeliveryForm } from "./components/DeliveryForm";
import { OrderSummary } from "./components/OrderSummary";
import { PaymentMethods } from "./components/PaymentMethods";

import { useCart } from "src/hooks/useCart";
import { newOrder, IDeliveryForm } from "./formValidators";

import * as S from "./styles";

export function Cart() {
  const { cart, checkout } = useCart();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDeliveryForm>({
    resolver: zodResolver(newOrder),
  });

  const selectedPaymentMethod = watch("paymentMethod");

  const handleOrderCheckout: SubmitHandler<IDeliveryForm> = (data) => {
    if (cart.length === 0)
      return alert("You need to have at least one item in the cart");

    checkout(data);
  };

  return (
    <S.Container>
      <S.InfoContainer>
        <h2>Complete your order</h2>

        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <DeliveryForm errors={errors} register={register} />

          <PaymentMethods
            errors={errors}
            register={register}
            selectedPaymentMethod={selectedPaymentMethod}
          />
        </form>
      </S.InfoContainer>

      <OrderSummary />
    </S.Container>
  );
}
