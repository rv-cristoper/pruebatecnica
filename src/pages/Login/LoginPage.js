import React, { useState } from "react";
import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { CustomInput } from "../../components/Input";
import { vstackStyles, linktoregisterStyles } from "./styles";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Logo } from "../../components/Logo";

export default function LoginPage() {
  const ht = useHistory();
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleSignin = () => {
    if (data.email.length < 1 || data.password.length < 1)
      return setError("Email and password are required");
    else setError(null);
    ht.push("/");
  };

  const handleChange = (ev) =>
    setData({ ...data, [ev.target.name]: ev.target.value });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex height="100vh" alignItems="center">
      <Box position="absolute" top="20px" left="20px" width="200px">
        <Logo />
      </Box>
      <VStack sx={vstackStyles}>
        <Text fontSize="4xl" fontWeight="bold">
          Sign in
        </Text>
        {error && <Text color="red">{error}</Text>}
        <CustomInput
          handleChange={handleChange}
          disabled={false}
          value={data.email}
          helper="Email is required"
          type="email"
          name="email"
          label="Email"
          Icon={EmailIcon}
        />
        <CustomInput
          disabled={false}
          Icon={!showPassword ? ViewIcon : ViewOffIcon}
          handleChange={handleChange}
          value={data.password}
          name="password"
          helper="Password is required"
          type={showPassword ? "text" : "password"}
          label="Password"
          handleClickIcon={handleShowPassword}
        />
        <Button variant="default" width="70%" mt="2em" onClick={handleSignin}>
          Sign in
        </Button>
        <Text sx={linktoregisterStyles}>
          <Link to="/signup">¿Don't you have an account?</Link>
        </Text>
      </VStack>
    </Flex>
  );
}
