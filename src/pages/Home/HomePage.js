import React from "react";

import { Box, Text } from "@chakra-ui/react";

export default function HomePage() {
  const boxStyles = {
    height: "500px",
    textAlign: "center",
    marginTop: "20%",
    ">p": {
      fontSize: "4xl",
      margin: "auto",
      fontWeight: "bold",
      width: "70%",
      maxWidth: "1000px",
    },
  };
  return (
    <Box sx={boxStyles}>
      <Text>You can see the sidebar responsive when you shrink the page</Text>
    </Box>
  );
}
