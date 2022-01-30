import styled from "styled-components";

const Container = styled.div`
  .user {
    padding: 2px 11px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    color: #ffffff;

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
  }
`;

export default Container;
