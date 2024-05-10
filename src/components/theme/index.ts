import { defaultTheme } from "evergreen-ui";
import { merge } from "lodash";


const theme = merge({}, defaultTheme, {
  typography: {
    fontFamilies: {
      display: "Open Sans, sans-serif",
      ui: "Open-sans, sans-serif",
      mono: "Open Sans, sans-serif"
    }    
  },
  colors: {
    tint2: "#f0f0f0", // Set your custom background color
    text: "#333", // Set your custom text color
    primary: "#007bff", // Set your custom primary color
  },
})

export default theme;
