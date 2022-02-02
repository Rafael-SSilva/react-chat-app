import React, {
  ButtonHTMLAttributes,
  FormEvent,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Container from "./styles";

function Login() {
  const navigate = useNavigate();

  const handlePressSignUp = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.code === "Space") {
      navigate("/signup");
      return true;
    }

    return false;
  };

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <div className="login">
        <form>
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <Button type="submit" onClick={handleSignIn}>
            Sign In
          </Button>
        </form>
        <p>
          Do not have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            role="button"
            tabIndex={0}
            onKeyPress={handlePressSignUp}>
            Sign Up
          </span>
        </p>
      </div>
    </Container>
  );
}

export default Login;
