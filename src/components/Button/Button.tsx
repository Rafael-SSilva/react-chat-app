import React, {
  ButtonHTMLAttributes,
  DetailsHTMLAttributes,
  MouseEventHandler,
} from "react";
import Container from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

function Button({
  children,
  onClick,
  onKeyPress,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Container onClick={onClick} onKeyPress={onKeyPress}>
      {children}
    </Container>
  );
}

export default Button;
