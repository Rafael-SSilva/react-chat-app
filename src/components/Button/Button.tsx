import React, { MouseEventHandler } from "react";
import Container from "./styles";

type ButtonProps = {
  text?: string;
  clickFc?: MouseEventHandler;
};

function Button({ text = "", clickFc }: ButtonProps) {
  return <Container onClick={clickFc}>{text}</Container>;
}

export default Button;
