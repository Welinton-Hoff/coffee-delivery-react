import { Card } from "src/components/Card";

import { coffees } from "../../../../../data.json";

import * as S from "./styles";

export function CoffeeList() {
  return (
    <S.Container>
      <h2>Our Coffees</h2>

      <div>
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </S.Container>
  );
}
