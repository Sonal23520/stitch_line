import React, { useState } from "react";
import "./Login.css";
import { Box, Link } from "@material-ui/core";
import SignupCompo from "../components/SignupCompo";
import LoginCompo from "../components/LoginCompo";

const Login = () => {
  const [type, setType] = useState("Login");

  return (
    <Box className="main">
      {type == "Login" ? <LoginCompo /> : <SignupCompo />}

      {type == "Login" ? (
        <Box className="typelink">
          <h5 style={{ marginRight: 10 }}>Don't Have an Account?</h5>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setType("Signup");
            }}
          >
            Signup
          </Link>
        </Box>
      ) : (
        <Box className="typelink">
          <h5 style={{ marginRight: 10 }}>Have an Account?</h5>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setType("Login");
            }}
          >
            Login
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Login;
