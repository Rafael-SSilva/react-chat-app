import React, { ChangeEventHandler, FormEventHandler } from "react";
import Container from "./styles";
import SearchIcon from "../assets/search-solid.svg";

type SearchProps = {
  keyPressFc: FormEventHandler;
  onClickFc: FormEventHandler;
  tabIndexNum: number;
  imgAlt: string;
  inputValue: string | number | readonly string[] | undefined;
  inputChange: ChangeEventHandler<HTMLInputElement>;
};

function SearchInput({
  imgAlt,
  tabIndexNum,
  keyPressFc,
  onClickFc,
  inputValue,
  inputChange,
}: SearchProps) {
  return (
    <Container>
      <input
        type="text"
        placeholder="user@email.com"
        value={inputValue}
        onChange={inputChange}
      />
      <div
        className="search-button"
        onKeyPress={keyPressFc}
        onClick={onClickFc}
        area-hidden="false"
        role="button"
        tabIndex={tabIndexNum}>
        <img srcSet={SearchIcon} alt={imgAlt} />
      </div>
    </Container>
  );
}

export default SearchInput;
