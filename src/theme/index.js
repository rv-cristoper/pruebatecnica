import { extendTheme } from "@chakra-ui/react";
const Button = {
  // style object for base or default style
  baseStyle: {
    padding: "10px 20px",
    transition: "450ms all",
    mx: 10,
    my: 10,
    display: "block",
    width: "40%",
    border: "1px solid",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      fontSize: "sm",
      px: "1em",
      py: ".5em",
    },
    md: {
      fontsize: "md",
      px: "1.2em",
      py: ".8em",
    },
    lg: {
      fontsize: "lg",
      px: "1.5em",
      py: "1em",
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    dark: {
      borderColor: "transparent",
      color: "primary.200",
      bg: "#21252b",
    },
    outline: {
      borderColor: "primary.200",
      bg: "white",
      color: "primary.200",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "outline",
  },
};

const colors = {
  primary: {
    400: "#454eff",
    300: "#1a365d",
    200: "#153e75",
    100: "#5d90e3",
  },
};

const components = { Button };

const styles = {
  global: {
    body: {
      height: "100vh",
      // overflow: "hidden",
      bg: "white",
      color: "primary.300",
    },
  },
};
const extendedThemeConfig = {
  styles,
  colors,
  components,
};

export const theme = extendTheme(extendedThemeConfig);
