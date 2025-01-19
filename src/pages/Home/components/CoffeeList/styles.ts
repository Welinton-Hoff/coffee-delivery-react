import { mixins } from "src/styles/mixins";
import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 72.5rem;
  padding: 2rem 1.25rem 9.375rem;

  gap: 3.375rem;
  display: flex;
  flex-direction: column;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors["base-subtitle"]}
  }

  > div {
    display: grid;
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
