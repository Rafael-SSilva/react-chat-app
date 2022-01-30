import styled from "styled-components";

const Container = styled.div`
  .user {
    padding: 2px 11px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    color: #ffffff;
    transition: 0.2s ease-in-out;

    & span {
      margin-left: 10px;
      font-size: 16px;
    }

    &.active {
      padding-left: 7px;
      margin-top: 6px;

      &::before {
        content: "";
        background-color: var(--primary);
        border-radius: 8px;
        width: 4px;
        height: 42px;
        position: relative;
        left: -6px;
        padding: 0;
      }
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
