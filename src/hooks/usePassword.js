import { useState } from "react";

export default function usePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return { showPassword, handleShowPassword };
}
