import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & .signup {
    border: 1px solid #cccccc;
    width: 80%;
    max-width: 420px;
    padding: 1.8rem 0 0.8rem;
    border-radius: 8px;
    background-color: var(--background);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & input {
      margin-top: 0.4rem;
      height: 42px;
      width: 80%;
    }

    & p {
      padding-left: 5px;
      width: 80%;
      margin-top: 0.8rem;
      color: white;
      font-size: 0.7em;

      & span {
        font-size: 0.7rem;
        color: var(--secondary);

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export default Container;
