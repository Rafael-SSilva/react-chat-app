import styled from "styled-components";

type PropTypes = {
  sending: boolean;
};

const Container = styled.div<PropTypes>`
  border-radius: 8px;
  text-align: ${(props) => (props.sending ? "right" : "left")};
  color: #ffffff;
  font-weight: 400;
  display: flex;
  align-self: ${(props) => (props.sending ? "flex-end" : "flex-start")};
  margin-right: ${(p) => (p.sending ? "10px" : "0")};

  & p {
    background-color: ${(props) => (props.sending ? "#ffaf00" : "#4F6779")};
    display: inline-block;
    padding: 0.4rem;
    border-radius: 8px;
    border-bottom-right-radius: ${(p) => (p.sending ? "0" : "8px")};
    border-bottom-left-radius: ${(p) => (p.sending ? "8px" : "0")};
    font-size: 16px;
    margin: 0.4rem 0 0 0;
  }
`;

export default Container;
