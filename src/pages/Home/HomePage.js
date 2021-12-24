import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { boxStyles } from "./styles";

export default function HomePage() {
  return (
    <Box sx={boxStyles}>
      <Text>You can see the sidebar responsive when you shrink the page</Text>
    </Box>
  );
}
