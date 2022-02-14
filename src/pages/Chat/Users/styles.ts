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

    &.online {
      position: relative;

      &::after {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--secondary);
        position: absolute;
        top: 50%;
        transform: translatey(-50%);
        right: 10px;
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
