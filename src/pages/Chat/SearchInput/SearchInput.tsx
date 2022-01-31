import React, { FormEventHandler } from "react";
import Container from "./styles";
import SearchIcon from "../../assets/search-solid.svg";

type SearchProps = {
  keyPressFc: FormEventHandler;
  onClickFc: FormEventHandler;
  tabIndexNum: number;
  imgAlt: string;
};

function SearchInput({
  imgAlt,
  tabIndexNum,
  keyPressFc,
  onClickFc,
}: SearchProps) {
  return (
    <Container>
      <input type="text" placeholder="user@email.com" />
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
