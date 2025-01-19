import styled from "styled-components";
import { mixins } from "src/styles/mixins";

export const Container = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    ${mixins.fonts.titleXS};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  > form {
    gap: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

export const CartTotal = styled.div`
  width: 100%;
  padding: 2.5rem;
  min-width: 28rem;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors["base-card"]};

  > span {
    height: 0.0625rem;
    margin: 1.5rem 0;
    display: block;
    background-color: ${({ theme }) => theme.colors["base-button"]};
  }
`;

export const CartTotalInfo = styled.div`
  gap: 0.75rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS};
    }

    span:last-child {
      ${mixins.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL};
      font-weight: bold;
    }
  }
`;

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 4rem;
      height: 4rem;
    }

    gap: 1.25rem;
    display: flex;
    align-items: stretch;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`;

export const CoffeeInfo = styled.div`
  gap: 0.5rem;
  display: flex;

  > button {
    gap: 0.5rem;
    display: flex;
    padding: 0.375rem 0.5rem;
    border-radius: 6px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors["base-button"]};

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors["base-hover"]};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors["base-text"]};
    }
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1.5rem;
  border-radius: 6px;
  text-transform: uppercase;

  ${mixins.fonts.buttonG};
  transition: all 0.2s;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};

  &:hover {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;
