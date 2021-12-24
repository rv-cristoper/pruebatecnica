import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { CustomInput } from "../../components/Input";

export default function ProfilePage() {
  const vstackStyles = {
    // maxWidth: "1000px",
    // width: "90%",
    // margin: "2em auto",
    // height: "80vh",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "primary.300",
  };
  return (
    <VStack sx={vstackStyles}>
      <Text fontSize="4xl" fontWeight="bold" mb="1em">
        My Information
      </Text>
      <Box>
        <Avatar w={"100px"} h={"100px"} />
      </Box>

      <HStack width="100%">
        <CustomInput label="First Name" required={false} value="Fernando Eli" />
        <CustomInput
          label="Last Name"
          required={false}
          value="Altamirano Alca"
        />
      </HStack>
      <HStack width="100%">
        <CustomInput
          label="Phone Number"
          type="tel"
          pattern="[0-9]{9}"
          required={false}
          value="986175271"
        />
        <CustomInput label="Birthday" type="date" value="2000-05-22" />
      </HStack>
      <CustomInput
        type="email"
        label="Email"
        required={false}
        value="fernandoelialtamirano@gmail.com"
      />
      <CustomInput
        type="text"
        label="Address"
        required={false}
        value="Callao - Lima, Perú"
      />
      <HStack width="100%">
        <CustomInput
          type="text"
          label="Created At"
          required={false}
          value="23 de diciembre del 2021"
        />
        <CustomInput
          type="text"
          label="Updated At"
          required={false}
          value="23 de diciembre del 2021"
        />
      </HStack>
    </VStack>
  );
}
