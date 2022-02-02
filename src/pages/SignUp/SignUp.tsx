import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Container from "./styles";

function SignUp() {
  return (
    <Container>
      <div className="signup">
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Input placeholder="Repeat Password" />
        <Button onClick={() => alert("Signed Up")} />
        <p>
          Already have an account? <span>Sign In</span>
        </p>
      </div>
    </Container>
  );
}

export default SignUp;
