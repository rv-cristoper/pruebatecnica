import React from "react";

import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { UserCard } from "../../components/UserCard";
import { boxStyles, hstackStyles } from "./styles";
export default function Page() {
  return (
    <Box sx={boxStyles}>
      <InputGroup>
        <InputLeftElement
          // pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="search" placeholder="Search users" />
      </InputGroup>
      <HStack sx={hstackStyles}>
        {[1, 2, 3, 4, 5].map(() => (
          <Box width="300px">
            <UserCard />
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
