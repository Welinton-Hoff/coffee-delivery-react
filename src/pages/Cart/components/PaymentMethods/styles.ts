import styled from "styled-components";
import { mixins } from "src/styles/mixins";

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

export const Heading = styled.div`
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

export const PaymentOptions = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;

  > div {
    gap: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};

  color: red;
  font-weight: 400;
`;
