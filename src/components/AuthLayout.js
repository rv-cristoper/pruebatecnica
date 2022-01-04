import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";

export const AuthLayout = ({ children }) => {
  return (
    <Box>
      <Box position="absolute" top="20px" left="20px" width="200px">
        <Logo />
      </Box>
      {children}
      <Flex
        position="absolute"
        bottom="20px"
        right="20px"
        justifyContent="flex-end"
      >
        <Text fontSize="sm" color="gray">
          Created by Fernando Altamirano Alca
        </Text>
      </Flex>
    </Box>
  );
};
