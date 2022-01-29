import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Container from "./styles";

function Login() {
  return (
    <Container>
      <div className="login">
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Button text="Sign In" clickFc={() => alert("Clicked")} />
        <p>
          Do not have an account? <span>Sign Up</span>
        </p>
      </div>
    </Container>
  );
}

export default Login;
