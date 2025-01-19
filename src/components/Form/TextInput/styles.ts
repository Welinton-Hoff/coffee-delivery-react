import styled from "styled-components";
import { mixins } from "src/styles/mixins";

export const Box = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.label`
  display: flex;
  align-items: center;
  transition: all 0.2s;
  border-radius: 0.375rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors["base-input"]};
  border: 0.0625rem solid ${({ theme }) => theme.colors["base-button"]};

  &[data-state="focused"] {
    border-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  &[data-state="blurred"] {
    border-color: ${({ theme }) => theme.colors["base-button"]};
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 0.75rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors["base-text"]};

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }

  span {
    ${mixins.fonts.textS};

    font-style: italic;
    padding-right: 0.75rem;
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS};

  color: red;
  font-weight: 400;
`;
