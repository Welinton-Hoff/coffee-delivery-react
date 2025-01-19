import styled from "styled-components";

export const Container = styled.div`
  gap: 0.25rem;
  display: flex;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors["base-button"]};

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
  }

  button svg {
    transition: all 0.2s;
    color: ${({ theme }) => theme.colors.purple};

    &:hover {
      color: ${({ theme }) => theme.colors["purple-dark"]};
    }
  }

  span {
    padding-top: 0.125rem;
    color: ${({ theme }) => theme.colors["base-title"]};
  }
`;
