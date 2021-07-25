import React, { useState, useEffect } from "react";
import "./SignupCompo.css";

import {
  TextField,
  Box,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
const SignupCompo = () => {
  const [value, setValue] = useState("Customer");
  const [height, setHeight] = useState(350);

  function setradioval(event) {
    setValue(event.target.value);
  }
  useEffect(() => {
    if (value == "Customer") {
      setHeight(350);
    } else {
      setHeight(460);
    }
  }, [value]);
  return (
    <Box>
      <h1 className="signup-label">Signup</h1>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        value={value}
        onChange={setradioval}
        defaultValue="Customer"
      >
        <FormControlLabel
          value="Customer"
          control={<Radio color="primary" />}
          label="Customer"
          labelPlacement="start"
        />
        <FormControlLabel
          value="Admin"
          control={<Radio color="primary" />}
          label="Admin"
          labelPlacement="start"
        />
      </RadioGroup>
      <Box
        width={500}
        height={height}
        justifyContent="space-around"
        display="flex"
        flexDirection="column"
        className="box"
      >
        {value == "Customer" ? null : (
          <TextField id="standard-basic" label="Emp ID" />
        )}
        <TextField id="standard-basic" label="Username" />
        <TextField id="standard-basic" label="Name" />
        <TextField id="standard-basic" label="Email" />
        {value == "Customer" ? null : (
          <TextField id="standard-basic" label="NIC " />
        )}
        <TextField id="standard-basic" label="Contact" />
        <TextField type="password" id="standard-basic" label="Password" />
        <Button
          onClick={() => {
            console.log(value);
          }}
          style={{ marginTop: 20 }}
          variant="contained"
          color="primary"
        >
          Signup
        </Button>
      </Box>
    </Box>
  );
};

export default SignupCompo;
