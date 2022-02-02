import React, { ChangeEventHandler, KeyboardEventHandler, memo } from "react";
import Container from "./styles";

type TextBoxProp = {
  handleSendMessage: KeyboardEventHandler;
  HandleKeyPress: KeyboardEventHandler;
  typeText: string | undefined;
  changeText: ChangeEventHandler<HTMLTextAreaElement>;
};

function TextBoxComponent({
  handleSendMessage,
  typeText,
  HandleKeyPress,
  changeText,
}: TextBoxProp) {
  return (
    <Container>
      <textarea
        onKeyDown={handleSendMessage}
        value={typeText}
        onChange={changeText}
        onKeyPress={HandleKeyPress}
      />
    </Container>
  );
}

const TextBox = memo(TextBoxComponent);
export default TextBox;
