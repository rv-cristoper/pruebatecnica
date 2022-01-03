import React, { useState } from "react";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CustomInput } from "../../components/Input";
import { vstackStyles, linktoregisterStyles } from "./styles";
import { EmailIcon, PhoneIcon, LockIcon, CheckIcon } from "@chakra-ui/icons";
import { Logo } from "../../components/Logo";
export default function RegisterPage() {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
  });
  const handleChange = (ev) =>
    setData({ ...data, [ev.target.name]: ev.target.value });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(data);
  };
  return (
    <Flex height="100vh" position="relative">
      <Box position="absolute" top="20px" left="20px" width="200px">
        <Logo />
      </Box>
      <VStack as="form" onSubmit={handleSubmit} sx={vstackStyles}>
        <Text fontSize="4xl" color="black.200" fontWeight="bold">
          Sign up
        </Text>
        <HStack width="100%" gap="2em">
          <CustomInput
            disabled={false}
            label="First Name"
            name="name"
            handleChange={handleChange}
            value={data.name}
          />
          <CustomInput
            disabled={false}
            value={data.lastname}
            label="Last Name"
            name="lastname"
            handleChange={handleChange}
          />
        </HStack>
        <CustomInput
          disabled={false}
          value={data.phone}
          Icon={PhoneIcon}
          label="Phone Number"
          type="tel"
          name="phone"
          pattern="[0-9]{9}"
          handleChange={handleChange}
        />
        <CustomInput
          disabled={false}
          value={data.email}
          handleChange={handleChange}
          Icon={EmailIcon}
          helper="Email is required"
          type="email"
          label="Email"
          name="email"
        />
        <HStack width="100%" gap="2em">
          <CustomInput
            disabled={false}
            value={data.password}
            Icon={LockIcon}
            handleChange={handleChange}
            helper="8 - 16 characters"
            type="password"
            label="Password"
            minLenght={8}
            name="password"
          />
          <CustomInput
            disabled={false}
            value={data.confirm}
            name="confirm"
            Icon={CheckIcon}
            helper="Confirm your password"
            type="password"
            handleChange={handleChange}
            label="Confirm Password"
          />
        </HStack>
        <Box width="100%" margin="auto">
          <Button variant="default" width="70%" margin="0 auto" type="submit">
            Sign up
          </Button>
        </Box>
        <Text sx={linktoregisterStyles}>
          <Link to="/signin">¿Do you have an account?</Link>
        </Text>
      </VStack>
    </Flex>
  );
}
