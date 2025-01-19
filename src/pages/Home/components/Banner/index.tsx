import { useTheme } from "styled-components";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import * as S from "./styles";

export function Banner() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <div>
          <S.Heading>
            <h1>Find the perfect coffee for any time of the day</h1>

            <span>
              With Coffee Delivery, you receive your coffee wherever you are, at
              any time
            </span>
          </S.Heading>

          <S.BannerInfo>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors["yellow-dark"] }}
              />
              <span>Simple and secure purchase</span>
            </div>

            <div>
              <Package
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors["base-text"] }}
              />
              <span>Packaging keeps the coffee intact</span>
            </div>

            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.yellow }}
              />
              <span>Fast and tracked delivery</span>
            </div>

            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.purple }}
              />
              <span>The coffee arrives fresh to you</span>
            </div>
          </S.BannerInfo>
        </div>

        <img src="/images/hero.svg" alt="Coffee from Coffee Delivery" />
      </S.Content>

      <img src="/images/hero-bg.svg" id="hero-bg" alt="" />
    </S.Container>
  );
}
