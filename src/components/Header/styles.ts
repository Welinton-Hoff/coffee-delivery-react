import styled from "styled-components";
import { mixins } from "src/styles/mixins";

export const Container = styled.header`
  display: flex;
  margin: 0 auto;
  max-width: 72.5rem;
  align-items: center;
  padding: 2rem 1.25rem;
  justify-content: space-between;
`;

export const Aside = styled.aside`
  gap: 0.75rem;
  display: flex;

  div {
    gap: 0.25rem;
    display: flex;
    align-items: center;
    border-radius: 0.375rem;
    padding: 0.625rem 0.5rem;
    background-color: ${({ theme }) => theme.colors["purple-light"]};

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      color: ${({ theme }) => theme.colors["purple-dark"]};
    }
  }

  a {
    display: flex;
    padding: 0.5rem;
    position: relative;
    align-items: center;
    border-radius: 0.375rem;
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    background-color: ${({ theme }) => theme.colors["yellow-light"]};

    &[aria-disabled="true"] {
      pointer-events: none;
    }

    span {
      ${mixins.fonts.textS};

      top: 0;
      right: 0;
      display: flex;
      width: 1.25rem;
      height: 1.25rem;
      font-weight: bold;
      border-radius: 50%;
      position: absolute;
      align-items: center;
      justify-content: center;
      transform: translate(50%, -50%);
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    }
  }
`;
