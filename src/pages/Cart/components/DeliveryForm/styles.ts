import { mixins } from "src/styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  gap: 2rem;
  width: 100%;
  display: flex;
  padding: 2.5rem;
  min-width: 640px;
  border-radius: 6px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const AddressHeading = styled.div`
  gap: 8px;
  display: flex;

  div {
    span {
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }

    p {
      ${mixins.fonts.textS};
    }
  }

  svg {
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-gap: 16px 12px;
  grid-template-columns: 200px 1fr 60px;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
`;
