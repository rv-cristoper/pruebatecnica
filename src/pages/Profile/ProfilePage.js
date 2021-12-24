import React from "react";
import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import { CustomInput } from "../../components/Input";
import { vstackStyles } from "./styles";

export default function ProfilePage() {
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
