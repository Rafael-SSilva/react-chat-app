import { sendPasswordResetEmail } from "firebase/auth";
import React, { FormEvent, KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import useAuth from "../../context/AuthProvider/useAuth";
import { auth } from "../../services/firebase";
import Container from "../Login/styles";

function ForgotPassword() {
  const navigate = useNavigate();
  const userAuth = useAuth();
  const [email, setEmail] = useState<string>("");

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
      .resetPassword(email)
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
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPassword;
