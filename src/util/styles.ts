import { css } from "styled-components";

const theme = {
  colors: {},

  fonts: {},

  shadows: {
    sparse: "0px 11px 67px -4px rgba(0, 0, 0, 0.6)",
  },

  transitions: {
    lifted: "all 700ms cubic-bezier(0.75, 0, 0.25, 1)",
    liftedFast: "all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)",
  },

  mixins: {
    unselectable: ({ pointerEvents = false } = {}) => css`
      ${!pointerEvents && "pointer-events: none;"}
      user-select: none;
      -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    `,
  },
};

export default theme;
export { theme };
