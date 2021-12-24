import React from "react";
import { Button, Text, VStack } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { CustomInput } from "../../components/Input";
import { vstackStyles } from "./styles";

export default function LoginPage() {
  const ht = useHistory();
  const handleSignin = () => {
    ht.push("/");
  };

  return (
    <VStack sx={vstackStyles}>
      <Text fontSize="4xl" fontWeight="bold">
        Sign in
      </Text>
      <CustomInput helper="Email is required" type="email" label="Email" />
      <CustomInput
        helper="Password is required"
        type="password"
        label="Password"
      />
      <Button onClick={handleSignin}>Sign in</Button>
      <Link to="/signup" style={{ marginTop: "2em" }}>
        ¿Don't you have an account?
      </Link>
    </VStack>
  );
}
