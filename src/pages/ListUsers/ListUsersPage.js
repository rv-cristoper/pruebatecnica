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
export default function Page() {
  const boxStyles = {
    maxWidth: "1000px",
    width: "90%",
    margin: "2em auto",
    height: "80vh",
  };
  const hstackStyles = {
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: "1em",
    marginTop: "4em",
    height: "70vh",
    overflow: "auto",
    width: "100%",
    "::-webkit-scrollbar": {
      backgroundColor: "white",
      width: "5px",
      borderRadius: "9px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "#B7BDCB",
      height: "20px",
    },
  };
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
