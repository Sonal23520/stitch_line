import React, { useState } from "react";
import "./LoginCompo.css";
import axios from "axios";

import { TextField, Box, Button } from "@material-ui/core";

const LoginCompo = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function login() {
    axios({
      method: "GET",
      url: `http://192.168.42.235:8000/login/${username}/${password}`,
    }).then((res) => {
      console.log(res.data);
    });
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
          onChange={(ev) => {
            setUsername(ev.target.value);
          }}
          id="standard-basic"
          label="Username"
        />
        <TextField
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
