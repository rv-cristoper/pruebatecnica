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
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
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
            <Link to="/signin">Log Out</Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
