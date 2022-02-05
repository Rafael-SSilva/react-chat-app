import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;

  .spinner,
  .spinner:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .spinner {
    font-size: 10px;
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid var(--primary);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Container;
