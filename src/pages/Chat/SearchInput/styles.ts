import styled from "styled-components";

const Container = styled.div`
  margin: 8px;
  display: flex;
  justify-content: space-between;
  background-color: #4f6779;
  border-radius: 8px;
  height: 40px;
  padding: 4px;

  & input {
    background: transparent;
    outline: none;
    border: none;
    margin-right: 8px;
    font-weight: 300;
    font-size: 20px;
    padding-left: 8px;
    width: 100%;
    color: #ffffff;
    font-size: 18px;

    &::placeholder {
      color: var(--placeholder);
    }
  }

  & .search-button {
    & img {
      width: 24px;
      padding-top: 4px;
      margin-right: 4px;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export default Container;
