import styled from "styled-components";

const Container = styled.button`
  font-size: 0.8rem;
  border: none;
  background-color: var(--primary);
  width: 80%;
  height: 42px;
  color: #000000;
  text-align: center;
  border-radius: 8px;
  margin-top: 0.6rem;
  opacity: 0.8;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #ffae00;
    opacity: 1;
  }
`;

export default Container;
