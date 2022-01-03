import { useToken } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const LinkComponent = ({ handleClick, style, route, text }) => {
  const ht = useHistory();
  const [color, setColor] = useState(style);
  const primary400 = useToken("colors", ["primary.400"]);
  useEffect(() => {
    if (route === ht.location.pathname) setColor(primary400);
    else setColor("transparent");
  }, [ht.location.pathname]);
  return (
    <Link
      onClick={() => handleClick(route)}
      style={{
        border: "1px solid",
        borderColor: color,
      }}
      to={route}
    >
      {text}
    </Link>
  );
};
