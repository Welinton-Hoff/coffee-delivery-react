import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";

import { Radio } from "src/components/Form/Radio";
import { IDeliveryForm, TPaymentMethod } from "../../formValidators";

import * as S from "./styles";

interface IPaymentMethodsFormProps {
  errors: FieldErrors<IDeliveryForm>;
  selectedPaymentMethod: TPaymentMethod;
  register: UseFormRegister<IDeliveryForm>;
}

export function PaymentMethods(props: Readonly<IPaymentMethodsFormProps>) {
  const { errors, register, selectedPaymentMethod } = props;

  return (
    <S.Container>
      <S.Heading>
        <CurrencyDollar size={22} />

        <div>
          <span>Payment</span>

          <p>
            Payment is made upon delivery. Choose the method you want to pay
          </p>
        </div>
      </S.Heading>

      <S.PaymentOptions>
        <div>
          <Radio
            value="credit"
            {...register("paymentMethod")}
            isSelected={selectedPaymentMethod === "credit"}
          >
            <CreditCard size={16} />
            <span>Credit Card</span>
          </Radio>

          <Radio
            value="debit"
            {...register("paymentMethod")}
            isSelected={selectedPaymentMethod === "debit"}
          >
            <Bank size={16} />
            <span>Debit Card</span>
          </Radio>

          <Radio
            value="cash"
            {...register("paymentMethod")}
            isSelected={selectedPaymentMethod === "cash"}
          >
            <Money size={16} />
            <span>Cash</span>
          </Radio>
        </div>

        {errors.paymentMethod && (
          <S.PaymentErrorMessage role="alert">
            {errors.paymentMethod.message}
          </S.PaymentErrorMessage>
        )}
      </S.PaymentOptions>
    </S.Container>
  );
}
