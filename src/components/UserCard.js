import React, { useState } from "react";

import {
  Avatar,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Switch,
  Text,
  useToken,
} from "@chakra-ui/react";

export const UserCard = () => {
  const primary400 = useToken("colors", ["primary.400"]);
  const [active, setActive] = useState(true);
  const boxStyles = {
    border: `1px solid ${primary400}`,
    borderRadius: "20px",
    padding: "1em",
    width: "300px",
    margin: "auto",
    opacity: active ? 1 : 0.3,
  };
  return (
    <Box sx={boxStyles}>
      <HStack justifyContent="space-between" width="100%">
        <Box flex=".8">
          <Avatar w={"50px"} h={"50px"} />
        </Box>
        <FormControl display="flex" alignItems="center" flex=".2">
          <FormLabel htmlFor="email-alerts" mb="0">
            Active
          </FormLabel>
          <Switch
            colorScheme=""
            id="email-alerts"
            isChecked={active}
            onChange={() => setActive(!active)}
          />
        </FormControl>
      </HStack>
      <Text fontWeight="bold" my=".5em">
        34FG4HG56
      </Text>
      <Text my="0.4em" fontSize="sm">
        <strong>Name: </strong>Fernando Altamirano Alca
      </Text>
      <Text my="0.4em" fontSize="sm">
        <strong>Email: </strong>fernandoelialtamirano@gmail.com
      </Text>
      <Text my="0.4em" fontSize="sm">
        <strong>Phone: </strong>986175271
      </Text>
      <Text my="0.4em" fontSize="sm">
        <strong>Birthday: </strong>22/05/2000
      </Text>
      <Text my="0.4em" fontSize="sm">
        <strong>Address: </strong>Callao - Lima, Perú
      </Text>
      <HStack justifyContent="space-between" fontSize="12px" mt="2em">
        <Box>
          <Text fontWeight="bold">Created at</Text>
          <Text>27/12/2021</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Updated at</Text>
          <Text>27/12/2021</Text>
        </Box>
      </HStack>
    </Box>
  );
};
