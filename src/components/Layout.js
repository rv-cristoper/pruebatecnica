import React from "react";
import { Box, Container, HStack } from "@chakra-ui/react";
import { CustomHeader } from "./Header";
import { Sidebar } from "./Sidebar";

export const CustomLayout = ({ children }) => {
  const boxStyles = {
    margin: "0 auto",
    height: "100vh",
  };
  const leftStyles = {
    color: "white",
    display: { base: "none", md: "block" },
    flex: ".2",
    height: "100%",
    background: "primary.400",
    maxWidth: "300px",
    shadow: "2xl",
  };
  const rightStyles = {
    flex: ".8",
    height: "100%",
    maxW: "container.xl",
    margin: "auto",
    marginLeft: "300px",
  };
  const hstackStyles = {
    height: "100%",
    alignItems: "center",
    justifyContent: { base: "center", md: "initial" },
  };
  return (
    <Box sx={boxStyles}>
      <HStack sx={hstackStyles}>
        <Box sx={leftStyles}>
          <Sidebar />
        </Box>
        <Container sx={rightStyles}>
          <CustomHeader />
          {children}
        </Container>
      </HStack>
    </Box>
  );
};
