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
    fontSize: "md",
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
      bg: "transparent",
      color: "primary.200",
      _hover: {
        bg: "primary.400",
        borderColor: "black.300",
        color: "black.300",
      },
    },
    default: {
      bg: "primary.400",
      color: "white",
      border: "1px solid transparent",
      _hover: {
        bg: "transparent",
        borderColor: "primary.400",
        color: "primary.400",
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "outline",
  },
};

const colors = {
  black: {
    200: "#2D2D2D",
    300: "#1B1B1B",
  },
  primary: {
    400: "#FD7A22",
  },
};

const components = { Button };

const styles = {
  global: {
    body: {
      height: "100vh",
      // overflow: "hidden",
      bg: "white",
      color: "black.300",
    },
  },
};
const extendedThemeConfig = {
  styles,
  colors,
  components,
};

export const theme = extendTheme(extendedThemeConfig);
