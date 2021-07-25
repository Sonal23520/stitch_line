import React from "react";
import "./LoginCompo.css";

import { TextField, Box, Button } from "@material-ui/core";

const LoginCompo = () => {
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
        <TextField id="standard-basic" label="Username" />
        <TextField type="password" id="standard-basic" label="Password" />
        <Button
          onClick={() => {}}
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
