import { useParams } from "react-router-dom";

import { useCart } from "src/hooks/useCart";
import { DeliveryDetails } from "./components/DeliveryDetails";

import * as S from "./styles";

export function Success() {
  const { orders } = useCart();
  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));

  if (!orderInfo?.id) return null;

  return (
    <S.Container>
      <S.Order>
        <S.Heading>
          <h2>Yay! Order confirmed</h2>
          <span>Now just wait for the coffee to reach you soon</span>
        </S.Heading>

        <DeliveryDetails {...orderInfo} />
      </S.Order>

      <img src="/images/delivery.svg" alt="Order completed" />
    </S.Container>
  );
}
