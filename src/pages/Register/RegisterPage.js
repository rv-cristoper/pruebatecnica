import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CustomInput } from "../../components/Input";
import { vstackStyles, linktoregisterStyles } from "./styles";
import {
  EmailIcon,
  PhoneIcon,
  ViewIcon,
  ViewOffIcon,
  CheckIcon,
} from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import usePassword from "../../hooks/usePassword";
import { AuthLayout } from "../../components/AuthLayout";

export default function RegisterPage() {
  const ht = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
  });
  const { showPassword, handleShowPassword } = usePassword();
  const handleChange = (ev) =>
    setData({ ...data, [ev.target.name]: ev.target.value });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);
    setError(null);
    if (data.password !== data.confirm) {
      setLoading(false);
      setError("Passwords are not equals");
      return;
    }
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: data.email,
        password: data.password,
        active: false,
      })
    );
    setTimeout(() => {
      setLoading(false);
      setError(null) && ht.push("/signin");
    }, [2000]);
  };
  return (
    <AuthLayout>
      <Flex height="100vh">
        <VStack as="form" onSubmit={handleSubmit} sx={vstackStyles}>
          <Text fontSize="4xl" color="black.200" fontWeight="bold">
            Sign up
          </Text>
          {error && <Text color="red">{error}</Text>}
          <HStack width="100%" gap="2em">
            <CustomInput
              isRequired={true}
              disabled={false}
              label="First Name"
              name="name"
              handleChange={handleChange}
              value={data.name}
            />
            <CustomInput
              isRequired={true}
              disabled={false}
              value={data.lastname}
              label="Last Name"
              name="lastname"
              handleChange={handleChange}
            />
          </HStack>
          <CustomInput
            isRequired={true}
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
            isRequired={true}
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
              isRequired={true}
              disabled={false}
              value={data.password}
              Icon={showPassword ? ViewOffIcon : ViewIcon}
              handleChange={handleChange}
              helper="8 - 16 characters"
              type={showPassword ? "text" : "password"}
              label="Password"
              minLenght={8}
              name="password"
              handleClickIcon={handleShowPassword}
              onCopy={false}
            />
            <CustomInput
              isRequired={true}
              disabled={false}
              value={data.confirm}
              name="confirm"
              Icon={CheckIcon}
              helper="Confirm your password"
              type="password"
              handleChange={handleChange}
              label="Confirm Password"
              onPaste={false}
            />
          </HStack>
          <Box width="100%" margin="auto">
            <Button
              disabled={loading}
              variant="default"
              width="70%"
              margin="0 auto"
              type="submit"
            >
              {loading ? <Spinner /> : "Sign up"}
            </Button>
          </Box>
          <Text sx={linktoregisterStyles}>
            <Link to="/signin">¿Do you have an account?</Link>
          </Text>
        </VStack>
      </Flex>
    </AuthLayout>
  );
}
