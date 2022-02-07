import React, {
  ButtonHTMLAttributes,
  FormEvent,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import useAuth from "../../context/AuthProvider/useAuth";
import Container from "./styles";

function Login() {
  const navigate = useNavigate();
  const userAuth = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {}, []);

  const handlePressSignUp = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.code === "Space") {
      navigate("/signup");
      return true;
    }

    return false;
  };

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    await userAuth.authenticate(email, password);
    navigate("/chat");
  };

  return (
    <Container>
      <div className="login">
        <form>
          <Input
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" onClick={handleSignIn}>
            Login
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
        <p>
          Forgot your password?{" "}
          <span
            onClick={() => navigate("/reset")}
            role="button"
            tabIndex={0}
            onKeyPress={handlePressSignUp}>
            Password Recevory
          </span>
        </p>
      </div>
    </Container>
  );
}

export default Login;
