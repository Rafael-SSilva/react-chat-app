import React, { FormEvent, KeyboardEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import useAuth from "../../context/AuthProvider/useAuth";
import Container from "./styles";

function SignUp() {
  const userAuth = useAuth();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const navigate = useNavigate();

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    if (password.trim() !== password2.trim()) {
      toast.error("Passwords does not match!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const res = await userAuth.signUpUser(username, email, password);
    if (res.error) {
      toast.error(res.error.code, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (res.user) {
      navigate("/signin");
    }
  };

  const handlePressSignIn = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.code === "Space") {
      navigate("/signin");
      return true;
    }

    return false;
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        onClick={() => userAuth.setAuthError({ active: false, message: "" })}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
      />
      <div className="signup">
        <form onSubmit={handleSignUp}>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <Input
            type="password"
            placeholder="Repeat Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <Button type="submit">Register</Button>
          <p>
            Already have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              role="button"
              tabIndex={0}
              onKeyPress={handlePressSignIn}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;
