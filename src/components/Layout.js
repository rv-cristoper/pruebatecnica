import React from "react";
import { Box, Container, HStack } from "@chakra-ui/react";
import { CustomHeader } from "./Header";
import { Sidebar } from "./Sidebar";
import { Redirect } from "react-router-dom";

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
    background: "black.200",
    maxWidth: "300px",
    shadow: "2xl",
    position: "fixed",
    width: { base: "0", md: "300px" },
  };
  const rightStyles = {
    paddingLeft: { base: 0, md: "350px" },
    flex: ".8",
    height: "100%",
    maxW: "container.xl",
    margin: "auto",
  };
  const hstackStyles = {
    height: "100%",
    alignItems: "center",
    justifyContent: { base: "center", md: "initial" },
  };
  if (!localStorage.getItem("user") || !localStorage.getItem("user").active)
    return <Redirect to="/signin" />;

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
