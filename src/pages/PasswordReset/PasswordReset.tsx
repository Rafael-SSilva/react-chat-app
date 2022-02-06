import React, { FormEvent, KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import useAuth from "../../context/AuthProvider/useAuth";
import Container from "../Login/styles";

function PasswordReset() {
  const navigate = useNavigate();
  const userAuth = useAuth();
  const [code, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");

  const handlePressSignIn = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.code === "Space") {
      navigate("/signin");
      return true;
    }

    return false;
  };

  const handleReset = (e: FormEvent) => {
    e.preventDefault();

    userAuth
      .confirmPassReset(code, password)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <div className="login">
        <form onSubmit={handleReset}>
          <Input
            placeholder="Reset code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Input
            type="password"
            placeholder="New assword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm new password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <Button type="submit">Reset</Button>
        </form>
        <p>
          I remeber my password{" "}
          <span
            onClick={() => navigate("/signin")}
            role="button"
            tabIndex={0}
            onKeyPress={handlePressSignIn}>
            Sign In
          </span>
        </p>
      </div>
    </Container>
  );
}

export default PasswordReset;
