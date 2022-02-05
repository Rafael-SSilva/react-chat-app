import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import Container from "./styles";

interface InputProps {
  type?: string;
  value?: string;
  placeholder?: string;
  onChangeFc?: ChangeEventHandler;
}

function Input({
  type,
  value,
  placeholder,
  onChange,
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Container
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
