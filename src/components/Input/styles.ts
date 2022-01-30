import styled from "styled-components";

const Container = styled.input`
  background-color: #ffffff;
  padding-left: 0.5rem;
  border: none;
  font-size: 0.8rem;
  border-radius: 8px;
  color: #b4b4b4;

  &:focus {
    outline: 3px solid var(--secondary);
  }
`;

export default Container;
