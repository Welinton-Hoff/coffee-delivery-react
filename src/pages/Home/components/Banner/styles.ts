import styled from "styled-components";
import { mixins } from "src/styles/mixins";

export const Container = styled.section`
  position: relative;

  img#hero-bg {
    top: 0;
    left: 0;
    width: 100vw;
    max-height: 34rem;
    object-fit: cover;
    position: absolute;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 72.5rem;
  padding: 5.75rem 1.25rem;

  gap: 3.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    gap: 4.125rem;
    display: flex;
    flex-direction: column;
  }
`;

export const Heading = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors["base-title"]}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors["base-subtitle"]}
  }
`;

export const BannerInfo = styled.div`
  display: grid;
  grid-row-gap: 1.25rem;
  grid-template-columns: 1fr 1fr;

  > div {
    gap: 0.75rem;
    display: flex;
    align-items: center;

    svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }
`;
