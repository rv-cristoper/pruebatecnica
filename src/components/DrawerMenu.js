import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const DrawerMenu = ({ isOpen, onClose, btnRef }) => {
  const vstackStyles = {
    mt: "1em",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  };
  const contentStyles = {
    a: {
      transition: "450ms all",
      fontSize: "xl",
      margin: "1em 0",
      ":hover": {
        opacity: 0.5,
      },
    },
  };

  const handleSignout = () => localStorage.removeItem("user");
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent sx={contentStyles}>
          <DrawerCloseButton />
          <DrawerBody textAlign="center" marginTop={14}>
            <Avatar w={10} h={10} />
            <Text textAlign="center" fontWeight="bold" mt="10px">
              Admin
            </Text>
            <Text textAlign="center" fontWeight="light" fontSize="sm">
              admin@gmail.com
            </Text>
            <VStack sx={vstackStyles}>
              <Link to="/profile" onClick={() => onClose()}>
                Edit Account
              </Link>
              <Link to="/list" onClick={() => onClose()}>
                List Users
              </Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter justifyContent="flex-start">
            <Link onClick={handleSignout} to="/signin">
              Log Out
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
