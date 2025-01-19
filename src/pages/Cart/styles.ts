import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.main`
  gap: 2rem;
  display: flex;
  margin: 0 auto;
  max-width: 72.5rem;
  padding: 2.5rem 1.25rem;
`;

export const InfoContainer = styled.div`
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
