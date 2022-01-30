import styled from "styled-components";

const Container = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;

  & > div {
    cursor: pointer;
  }

  & span {
    margin-left: 10px;
    font-size: 20px;
  }
`;

export default Container;
