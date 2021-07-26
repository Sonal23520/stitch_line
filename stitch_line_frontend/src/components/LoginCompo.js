import React, { useState } from "react";
import "./LoginCompo.css";
import axios from "axios";

import { TextField, Box, Button, Alert } from "@material-ui/core";

const LoginCompo = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameerro, setUsernameErro] = useState(false);
  const [passworderro, setPasswordErro] = useState(false);

  const [usernamehelper, setUsernameHelper] = useState("");
  const [passwordhelper, setPasswordHelper] = useState("");

  var usernameRegex = /^[a-zA-Z0-9]+$/;
  var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  function login() {
    if (username == "") {
      setUsernameErro(true);
      setUsernameHelper("please fill username");
    } else if (!usernameRegex.test(username)) {
      setUsernameErro(true);
      setUsernameHelper("please fill valid username");
    } else if (password == "") {
      setPasswordErro(true);
      setPasswordHelper("please fill password");
    } else if (!passwordRegex.test(password)) {
      setPasswordErro(true);
      setPasswordHelper("please fill valid password");
    } else {
      setUsernameErro(false);
      setPasswordErro(false);
      setPasswordHelper("");
      setUsernameHelper("");
      axios({
        method: "GET",
        url: `http://192.168.42.235:8000/login/${username}/${password}`,
      }).then((res) => {
        console.log(res.data);
      });
    }
  }
  return (
    <Box>
      <h1 className="login-label">LogIn</h1>

      <Box
        width={500}
        height={200}
        justifyContent="space-around"
        display="flex"
        flexDirection="column"
        className="box"
      >
        <TextField
          helperText={usernamehelper}
          error={usernameerro ? true : false}
          value={username}
          onChange={(ev) => {
            setUsername(ev.target.value);
          }}
          id="standard-basic"
          label="Username"
        />
        <TextField
          helperText={passwordhelper}
          error={passworderro ? true : false}
          value={password}
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
          type="password"
          id="standard-basic"
          label="Password"
        />
        <Button
          onClick={login}
          style={{ marginTop: 20 }}
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginCompo;
