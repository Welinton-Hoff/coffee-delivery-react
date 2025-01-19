import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 0.0625rem solid;
  border-color: transparent;
  background-origin: border-box;
  border-radius: 0.375rem 2.25rem;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
`;

export const Content = styled.div`
  gap: 2rem;
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  background-color: white;
  border-radius: 0.375rem 2.25rem;

  > div {
    gap: 0.75rem;
    display: flex;
    align-items: center;

    > svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`;
