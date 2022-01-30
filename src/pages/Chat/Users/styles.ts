import styled from "styled-components";

const Container = styled.div`
  .user {
    padding: 2px 11px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    color: #ffffff;
    transition: 0.2s ease-in-out;

    & span {
      margin-left: 10px;
      font-size: 16px;
    }

    &.active {
      background-color: #0a2940;
      -webkit-box-shadow: 0px 3px 5px 1px rgba(59, 98, 128, 0.31);
      box-shadow: 0px 1px 2px 1px rgba(59, 98, 128, 0.31);
    }

    &:hover {
      background-color: #0a2940;
      cursor: pointer;
      -webkit-box-shadow: 0px 3px 5px 1px rgba(59, 98, 128, 0.71);
      box-shadow: 0px 3px 5px 1px rgba(59, 98, 128, 0.71);
    }
  }
`;

export default Container;
