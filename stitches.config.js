import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, theme } = createStitches({
  theme: {
    colors: {
      primary: "#ff6600",
      borderColor: "#d1d5db",
      textColor: "#333",
      backgroundColor: "#f8f9fa",
    },
    space: {
      small: "8px",
      medium: "16px",
    },
    radii: {
      small: "4px",
      medium: "8px",
    },
    fontSizes: {
      base: "16px",
      lg: "18px",
    },
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
    paddingX: (value) => ({ paddingLeft: value, paddingRight: value }),
  },
});
