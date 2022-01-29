import React, { ChangeEventHandler } from "react";
import Container from "./styles";

interface InputProps {
  type?: string;
  value?: string;
  placeholder?: string;
  onChangeFc?: ChangeEventHandler;
}

function Input({
  type = "text",
  value = "",
  placeholder = "",
  onChangeFc,
}: InputProps) {
  return (
    <Container
      type={!type ? "text" : type}
      value={!value ? "" : value}
      placeholder={!placeholder ? "" : placeholder}
      onChange={!onChangeFc ? undefined : onChangeFc}
    />
  );
}

export default Input;
