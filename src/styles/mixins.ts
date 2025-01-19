import { css } from "styled-components";

export const mixins = {
  fonts: {
    titleXL: css`
      font-size: 3rem;
      font-weight: 800;
      line-height: 130%;
      font-family: "Baloo 2", sans-serif;
    `,

    titleL: css`
      font-size: 2rem;
      font-weight: 800;
      line-height: 130%;
      font-family: "Baloo 2", sans-serif;
    `,

    titleM: css`
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;
      font-family: "Baloo 2", sans-serif;
    `,

    titleS: css`
      font-weight: 700;
      line-height: 130%;
      font-size: 1.25rem;
      font-family: "Baloo 2", sans-serif;
    `,

    titleXS: css`
      font-weight: 700;
      line-height: 130%;
      font-size: 1.125rem;
      font-family: "Baloo 2", sans-serif;
    `,

    textL: css`
      font-weight: 400;
      line-height: 130%;
      font-size: 1.25rem;
      font-family: "Roboto", sans-serif;
    `,

    textM: css`
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
      font-family: "Roboto", sans-serif;
    `,

    textS: css`
      font-weight: 400;
      line-height: 130%;
      font-size: 0.875rem;
      font-family: "Roboto", sans-serif;
    `,

    textXS: css`
      font-weight: 700;
      line-height: 130%;
      font-size: 0.75rem;
      font-family: "Roboto", sans-serif;
    `,

    tag: css`
      font-weight: 700;
      line-height: 130%;
      font-size: 0.625rem;
      font-family: "Roboto", sans-serif;
    `,

    buttonG: css`
      font-weight: 700;
      line-height: 160%;
      font-size: 0.875rem;
      font-family: "Roboto", sans-serif;
    `,

    buttonM: css`
      font-weight: 400;
      line-height: 160%;
      font-size: 0.75rem;
      font-family: "Roboto", sans-serif;
    `,
  },
};
