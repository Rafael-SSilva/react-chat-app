import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  & textarea {
    background-color: rgba(62, 78, 90, 0.8);
    border: 1px solid #ffffff;
    border-radius: 8px;
    color: #ffffff;
    font-weight: 300;
    font-size: 16px;
    height: 100%;
    line-height: 18px;
    outline: none;
    padding: 10px 0 10px 10px;
    width: 95%;
  }
`;

export default Container;
