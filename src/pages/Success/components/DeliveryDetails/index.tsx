import { useTheme } from "styled-components";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

import { Order } from "src/reducers/cart/reducer";

import * as S from "./styles";

type IDeliveryDetailsProps = Order;

const paymentMethods = {
  cash: "Cash",
  debit: "Debit Card",
  credit: "Credit Card",
};

export function DeliveryDetails(props: Readonly<IDeliveryDetailsProps>) {
  const { city, state, number, street, neighborhood, paymentMethod } = props;

  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <div>
          <MapPin
            size={32}
            color={theme.colors.white}
            style={{ backgroundColor: theme.colors.purple }}
          />

          <div>
            <span>
              Delivery at{" "}
              <strong>
                {street}, {number}
              </strong>
            </span>

            <span>
              {neighborhood} - {city}, {state}
            </span>
          </div>
        </div>

        <div>
          <Timer
            size={32}
            color={theme.colors.white}
            style={{ backgroundColor: theme.colors.yellow }}
          />

          <div>
            <span>Estimated delivery time</span>

            <strong>20 min - 30 min</strong>
          </div>
        </div>

        <div>
          <CurrencyDollar
            size={32}
            color={theme.colors.white}
            style={{ backgroundColor: theme.colors["yellow-dark"] }}
          />

          <div>
            <span>Payment on delivery</span>

            <strong>{paymentMethods[paymentMethod]}</strong>
          </div>
        </div>
      </S.Content>
    </S.Container>
  );
}
