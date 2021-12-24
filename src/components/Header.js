import React, { useRef, useState } from "react";
import {
  useDisclosure,
  Box,
  Avatar,
  Select,
  HStack,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { DrawerMenu } from "./DrawerMenu";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

export const CustomHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const ht = useHistory();
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
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen}>
                  fernandoelialtamirano@gmail.com
                  <ChevronDownIcon color="primary.300" ml={4} />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => ht.push("/profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => ht.push("/")}>Settings</MenuItem>
                  <MenuItem onClick={() => ht.push("/signin")}>Logout</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
      </HStack>
      <DrawerMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </>
  );
};
