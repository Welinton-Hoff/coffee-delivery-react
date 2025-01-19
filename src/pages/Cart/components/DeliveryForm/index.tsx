import { MapPin } from "@phosphor-icons/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { IDeliveryForm } from "../../formValidators";
import { TextInput } from "src/components/Form/TextInput";

import * as S from "./styles";

interface IDeliveryFormProps {
  errors: FieldErrors<IDeliveryForm>;
  register: UseFormRegister<IDeliveryForm>;
}

export function DeliveryForm(props: Readonly<IDeliveryFormProps>) {
  const { errors, register } = props;
  return (
    <S.Container>
      <S.AddressHeading>
        <MapPin size={22} />

        <div>
          <span>Delivery Address</span>
          <p>Enter the address where you want to receive your order</p>
        </div>
      </S.AddressHeading>

      <S.AddressForm>
        <TextInput
          type="number"
          error={errors.cep}
          placeholder="ZIP Code"
          containerProps={{ style: { gridArea: "cep" } }}
          {...register("cep", { valueAsNumber: true })}
        />

        <TextInput
          placeholder="Street"
          error={errors.street}
          {...register("street")}
          containerProps={{ style: { gridArea: "street" } }}
        />

        <TextInput
          placeholder="Number"
          error={errors.number}
          {...register("number")}
          containerProps={{ style: { gridArea: "number" } }}
        />

        <TextInput
          optional
          placeholder="Complement"
          error={errors.fullAddress}
          {...register("fullAddress")}
          containerProps={{ style: { gridArea: "fullAddress" } }}
        />

        <TextInput
          placeholder="Neighborhood"
          error={errors.neighborhood}
          {...register("neighborhood")}
          containerProps={{ style: { gridArea: "neighborhood" } }}
        />

        <TextInput
          placeholder="City"
          error={errors.city}
          {...register("city")}
          containerProps={{ style: { gridArea: "city" } }}
        />

        <TextInput
          maxLength={2}
          placeholder="State"
          error={errors.state}
          {...register("state")}
          containerProps={{ style: { gridArea: "state" } }}
        />
      </S.AddressForm>
    </S.Container>
  );
}
