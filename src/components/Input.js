import React, { useEffect, useRef, useState } from "react";

import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

export const CustomInput = ({
  value = "",
  label,
  helper = null,
  type = "text",
  required = false,
  handleChange = null,
  Icon,
  name = "",
  handleClickIcon = null,
  disabled = true,
  ...rest
}) => {
  const [activeInput, setActiveInput] = useState(false);
  // const [value, setValue] = useState("");
  const handleFocus = () => setActiveInput(true);
  const handleBlur = () => {
    if (value.length < 1) setActiveInput(false);
  };

  useEffect(() => {
    if (value.length > 0) setActiveInput(true);
    else setActiveInput(false);
  }, [value]);

  const labelStyles = {
    opacity: activeInput ? 1 : 0.5,
    transform: activeInput ? "translateY(0px)" : "translateY(40px)",
  };
  return (
    <FormControl width="100%" isRequired={required} py="1em">
      <FormLabel sx={labelStyles}>{label}</FormLabel>
      <InputGroup>
        <Input
          onBlur={handleBlur}
          onFocus={handleFocus}
          variant="flushed"
          defaultValue={value}
          disabled={disabled}
          {...rest}
          name={name}
          type={type}
          onChange={handleChange}
        />
        {Icon && (
          <InputRightElement
            onClick={handleClickIcon && handleClickIcon}
            pointerEvents={handleClickIcon ? "auto" : "none"}
            cursor={handleClickIcon ? "pointer" : "initial"}
            children={<Icon opacity=".5" />}
          />
        )}
      </InputGroup>
    </FormControl>
  );
};
