import styled from "styled-components";
import { mixins } from "src/styles/mixins";

export const Container = styled.main`
  gap: 2.5rem;
  display: flex;
  margin: 0 auto;
  max-width: 72.5rem;
  padding: 5rem 1.25rem;
  align-items: flex-end;
  justify-content: space-between;

  img {
    margin-bottom: -0.8125rem;
  }
`;

export const Order = styled.section`
  gap: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  gap: 0.25rem;
  display: flex;
  flex-direction: column;

  h2 {
    ${mixins.fonts.titleL};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  span {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;
