import styled from "styled-components";

const Container = styled.div`
  border-radius: 8px;
  margin: 14px 0 0 14px;
  width: calc(100% - 30%);
  height: calc(98% - 14px);
  background-color: var(--background);
  margin-bottom: 100px;

  & .header {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 64px;
    width: 100%;
    background-color: var(--background-shadow);
    display: flex;
    align-items: center;
    color: #ffffff;

    & .avatar {
      margin: 0 1rem;
      font-size: 20px;
      display: flex;
      align-items: center;

      & span {
        margin-left: 10px;
        font-size: 20px;
      }
    }
  }

  & .content {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    height: inherit;
    flex-direction: column;
    justify-content: flex-end;
    max-height: calc(100% - 150px);
    max-width: 98%;
    margin-bottom: 20px;
    overflow-y: auto;
    padding: 10px 0 0px 10px;
  }

  & .textbox {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    margin-top: 12px;

    & textarea {
      background-color: rgba(62, 78, 90, 0.8);
      border: 1px solid #ffffff;
      border-radius: 8px;
      color: #ffffff;
      font-weight: 300;
      font-size: 16px;
      height: 100%;
      line-height: 24px;
      outline: none;
      padding: 10px 0 10px 10px;
      width: 95%;
    }
  }
`;

export default Container;
