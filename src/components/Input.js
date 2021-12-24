import React from "react";

import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const CustomInput = ({
  value = "",
  label,
  helper = null,
  type = "text",
  required = true,
  ...rest
}) => {
  return (
    <FormControl isRequired={required} py="1em">
      <FormLabel>{label}</FormLabel>
      <Input value={value} {...rest} id="email" type={type} />
      {helper && <FormHelperText>{helper}</FormHelperText>}
    </FormControl>
  );
};
