import styled from "styled-components";
import { mixins } from "src/styles/mixins";

export const Container = styled.label`
  ${mixins.fonts.buttonM};

  width: 100%;
  gap: 0.75rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  border-radius: 0.375rem;
  text-transform: uppercase;
  border: 0.0625rem solid transparent;
  color: ${({ theme }) => theme.colors["base-text"]};
  background-color: ${({ theme }) => theme.colors["base-button"]};

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }

  &[data-state="true"] {
    border-color: ${({ theme }) => theme.colors.purple};
    background-color: ${({ theme }) => theme.colors["purple-light"]};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
