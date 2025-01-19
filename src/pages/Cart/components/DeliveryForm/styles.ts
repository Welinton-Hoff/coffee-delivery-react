import { mixins } from "src/styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  gap: 2rem;
  width: 100%;
  display: flex;
  padding: 2.5rem;
  min-width: 40rem;
  border-radius: 6px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const AddressHeading = styled.div`
  gap: 0.5rem;
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
  grid-gap: 1rem 0.75rem;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
`;
