import React, { useState, useEffect } from "react";
import "./SignupCompo.css";
import axios from "axios";

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

  /////////////////DATA//////////////
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [password, setPassword] = useState();
  const [nic, setNic] = useState();
  const [empid, setEmpid] = useState();
  //////////////////////////////////

  function setradioval(event) {
    setValue(event.target.value);
  }
  useEffect(() => {
    if (value == "Customer") {
      setHeight(380);
    } else {
      setHeight(460);
    }
  }, [value]);

  function save() {
    if (value == "Customer") {
      axios({
        method: "POST",
        url: "http://192.168.42.235:8000/login/customer",
        data: {
          username: username,
          name: name,
          email: email,
          address: address,
          contact: contact,
          password: password,
        },
      }).then((res) => {
        console.log(res.data);
      });
    } else {
      axios({
        method: "POST",
        url: "http://192.168.42.235:8000/login/admin",
        data: {
          empid: empid,
          username: username,
          name: name,
          nic: nic,
          email: email,
          contact: contact,
          password: password,
        },
      }).then((res) => {
        console.log(res.data);
      });
    }
  }

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
          <TextField
            id="standard-basic"
            onChange={(ev) => {
              setEmpid(ev.target.value);
            }}
            label="Emp ID"
          />
        )}
        <TextField
          id="standard-basic"
          onChange={(ev) => {
            setUsername(ev.target.value);
          }}
          label="Username"
        />
        <TextField
          id="standard-basic"
          onChange={(ev) => {
            setName(ev.target.value);
          }}
          label="Name"
        />
        <TextField
          id="standard-basic"
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
          label="Email"
        />
        {value == "Customer" ? (
          <TextField
            id="standard-basic"
            onChange={(ev) => {
              setAddress(ev.target.value);
            }}
            label="Address"
          />
        ) : null}
        {value == "Customer" ? null : (
          <TextField
            id="standard-basic"
            onChange={(ev) => {
              setNic(ev.target.value);
            }}
            label="NIC"
          />
        )}
        <TextField
          id="standard-basic"
          onChange={(ev) => {
            setContact(ev.target.value);
          }}
          label="Contact"
        />
        <TextField
          type="password"
          id="standard-basic"
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
          label="Password"
        />
        <Button
          onClick={save}
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
