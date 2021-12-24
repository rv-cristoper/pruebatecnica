import { Avatar, AvatarBadge, Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const vstackStyles = {
    fontSize: "xl",
    fontWeight: "bold",
    // height: "100%",
    marginTop: "4em",
    justifyContent: "space-between",
    height: "50vh",
  };
  const optionStyles = {
    textAlign: "left",
    padding: ".6em 0",
    ":hover": {
      textDecoration: "underline",
    },
  };
  const headerStyles = {
    background: "white",
    color: "primary.300",
    padding: "1em",
    textAlign: "center",
    pt: "5em",
    height: "30vh",
  };
  return (
    <Box>
      <Box sx={headerStyles}>
        <Avatar w={"40px"} h={"40px"} />
        <Text my="1em">ADMIN</Text>
        <Text fontSize="sm" fontWeight="light">
          admin@gmail.com
        </Text>
      </Box>
      <VStack sx={vstackStyles}>
        <Box>
          <Text sx={optionStyles}>
            <Link to="/">Inicio</Link>
          </Text>
          <Text sx={optionStyles}>
            <Link to="/profile">Profile</Link>
          </Text>
          <Text sx={optionStyles}>
            <Link to="/list">List Users</Link>
          </Text>
        </Box>
        <Text sx={optionStyles}>
          <Link to="/signin">Log Out</Link>
        </Text>
      </VStack>
    </Box>
  );
};
