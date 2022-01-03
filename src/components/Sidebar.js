import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Text,
  useToken,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { LinkComponent } from "./Link";
export const Sidebar = () => {
  const history = useHistory();
  const [selected, setSelected] = useState("/");
  const primary400 = useToken("colors", ["primary.400"]);
  const vstackStyles = {
    fontSize: "xl",
    fontWeight: "bold",
    bg: "black.200",
    marginTop: "4em",
    justifyContent: "space-between",
    height: "50vh",
    ">a": {
      transition: "250ms all",
      ":hover": {
        opacity: ".5",
      },
    },
  };
  const containerOptionsStyles = {
    width: "100%",
    ">a": {
      width: "60%",
      display: "block",
      margin: ".7em 0 0 2em",
      borderRadius: "4px",
      transition: "250ms all",
      border: "1px solid transparent",
      padding: ".3em",
      color: primary400,
      ":hover": {
        borderColor: primary400,
      },
    },
  };
  const headerStyles = {
    background: "primary.400",
    color: "white",
    padding: "1em",
    textAlign: "center",
    pt: "4em",
    height: "32vh",
  };

  useEffect(() => {
    console.log(history.location.pathname);
    setSelected(history.location.pathname);
  }, []);
  const handleClick = (val) => setSelected(val);
  return (
    <Box>
      <Box sx={headerStyles}>
        <Avatar w={"50px"} h={"50px"} />
        <Text my="1em">Fernando Eli Altamirano Alca</Text>
        <Text fontSize="sm" fontWeight="light">
          fernandoelialtamirano@gmail.com
        </Text>
        <Text fontSize="sm" fontWeight="light">
          +51 986175271
        </Text>
        <Button
          onClick={() => history.push("/profile")}
          margin="1.3em auto"
          width="60%"
          variant="outline"
        >
          Update profile
        </Button>
      </Box>
      <VStack sx={vstackStyles}>
        <Box sx={containerOptionsStyles}>
          <LinkComponent
            handleClick={handleClick}
            style={selected === "/" ? primary400 : "transparent"}
            text="Inicio"
            route="/"
          />
          <LinkComponent
            handleClick={handleClick}
            style={selected === "/profile" ? primary400 : "transparent"}
            text="Profile"
            route="/profile"
          />
          <LinkComponent
            handleClick={handleClick}
            style={selected === "/list" ? primary400 : "transparent"}
            text="List Users"
            route="/list"
          />
        </Box>
        <Link to="/signin">Log Out</Link>
      </VStack>
    </Box>
  );
};
