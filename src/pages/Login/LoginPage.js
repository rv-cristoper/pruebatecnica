import React, { useState } from "react";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { CustomInput } from "../../components/Input";
import ImageLogin from "../../components/ImageLogin";
import { vstackStyles, linktoregisterStyles } from "./styles";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import usePassword from "../../hooks/usePassword";
import { AuthLayout } from "../../components/AuthLayout";

export default function LoginPage() {
  const ht = useHistory();
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { showPassword, handleShowPassword } = usePassword();

  const handleSignin = (ev) => {
    ev.preventDefault();
    if (data.email.length < 1 || data.password.length < 1)
      return setError("Email and password are required");
    else setError(null);
    if (!localStorage.getItem("user"))
      return setError("Email or password are invalid");
    else {
      setError(null);
      const localData = JSON.parse(localStorage.getItem("user"));
      if (
        data.email !== localData.email ||
        data.password !== localData.password
      )
        return setError("Email or password are invalid");
      setError(null);
      ht.push("/");
    }
  };

  const handleChange = (ev) =>
    setData({ ...data, [ev.target.name]: ev.target.value });

  return (
    <AuthLayout>
      <Flex height="100vh" alignItems="center">
        <VStack as="form" onSubmit={handleSignin} sx={vstackStyles}>
          <Text fontSize="4xl" fontWeight="bold">
            Sign in
          </Text>
          {error && <Text color="red">{error}</Text>}
          <CustomInput
            isRequired={true}
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
            isRequired={true}
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
          <Button type="submit" variant="default" width="70%" mt="2em">
            Sign in
          </Button>
          <Text sx={linktoregisterStyles}>
            <Link to="/signup">¿Don't you have an account?</Link>
          </Text>
        </VStack>
        <Box flex=".4" display={{ base: "none", lg: "initial" }}>
          <ImageLogin />
        </Box>
      </Flex>
    </AuthLayout>
  );
}
