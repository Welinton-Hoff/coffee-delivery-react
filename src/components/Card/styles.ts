import styled from "styled-components";
import { mixins } from "src/styles/mixins";

export const Container = styled.div`
  width: 16rem;
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 0 1.25rem 1.25rem;
  border-radius: 0.375rem 2.25rem;
  background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const CoffeeImg = styled.img`
  max-width: 7.5rem;
  max-height: 7.5rem;
  align-self: center;
  margin-top: -1.25rem;
`;

export const Tags = styled.div`
  gap: 0.25rem;
  display: flex;
  align-self: center;
  margin-top: 0.75rem;
  align-items: center;

  span {
    ${mixins.fonts.tag}
    border-radius: 6.25rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    background-color: ${({ theme }) => theme.colors["yellow-light"]};
  }
`;

export const Title = styled.h3`
  ${mixins.fonts.titleS}

  margin-top: 1rem;
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

export const Description = styled.span`
  ${mixins.fonts.textS}

  width: 100%;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors["base-label"]};
`;

export const Control = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.div`
  gap: 0.125rem;
  display: flex;
  align-items: baseline;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const Order = styled.div<{ $itemAdded?: boolean }>`
  gap: 0.5rem;
  display: flex;
  align-items: center;

  > button {
    padding: 0.5rem;
    display: flex;
    border-radius: 0.375rem;
    transition: background-color 0.2s;
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors["yellow-dark"] : theme.colors["purple-dark"]};

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors.yellow : theme.colors.purple};
    }
  }
`;
