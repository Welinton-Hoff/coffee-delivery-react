import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import { useCart } from "src/hooks/useCart";

import * as S from "./styles";

export function Header() {
  const { cart } = useCart();

  return (
    <S.Container>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>

      <S.Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Dublin, IE</span>
        </div>

        <Link to={`cart`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </S.Aside>
    </S.Container>
  );
}
