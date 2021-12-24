import React from "react";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CustomInput } from "../../components/Input";
import { vstackStyles } from "./styles";

export default function RegisterPage() {
  return (
    <VStack sx={vstackStyles}>
      <Text fontSize="4xl" fontWeight="bold">
        Sign up
      </Text>
      <HStack width="100%">
        <CustomInput label="First Name" />
        <CustomInput label="Last Name" />
      </HStack>
      <HStack width="100%">
        <CustomInput label="Phone Number" type="tel" pattern="[0-9]{9}" />
        <CustomInput label="Birthday" type="date" />
      </HStack>
      <CustomInput helper="Email is required" type="email" label="Email" />
      <HStack width="100%">
        <CustomInput
          helper="8 - 16 characters"
          type="password"
          label="Password"
          minLenght={8}
        />
        <CustomInput
          helper="Confirm your password"
          type="password"
          label="Confirm Password"
        />
      </HStack>
      <Button>Sign up</Button>
      <Link to="/signin" style={{ marginTop: "2em" }}>
        ¿Do you have an account?
      </Link>
    </VStack>
  );
}
