import React, { useRef } from "react";
import { useDisclosure, Box, Avatar, Select, HStack } from "@chakra-ui/react";
import { DrawerMenu } from "./DrawerMenu";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const CustomHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const hstackStyles = {
    justifyContent: { base: "space-between", md: "flex-end" },
    maxWidth: "1400px",
    margin: "auto",
    padding: "1em 0",
  };
  const optionsStyles = {
    display: "flex",
    alignItems: "center",
  };
  const hamburguerStyles = {
    display: { base: "block", md: "none" },
    w: 6,
    h: 6,
    cursor: "pointer",
    color: "primary.300",
  };
  return (
    <>
      <HStack sx={hstackStyles}>
        <HamburgerIcon onClick={onOpen} ref={btnRef} sx={hamburguerStyles} />
        <Box sx={optionsStyles}>
          <Avatar w={8} h={8} mr="1em" />
          <Select placeholder="Admin" border={"none"}>
            <option value="" key="">
              Settings
            </option>
            <option value="" key="">
              Sign out
            </option>
          </Select>
        </Box>
      </HStack>
      <DrawerMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </>
  );
};
