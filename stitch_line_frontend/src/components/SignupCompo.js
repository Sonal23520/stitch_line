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
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [nic, setNic] = useState("");
  const [empid, setEmpid] = useState("");
  ////////////ERRO//////////////////
  const [usernameerro, setUsernameErro] = useState(false);
  const [passworderro, setPasswordErro] = useState(false);
  const [nameerro, setNameErro] = useState(false);
  const [empiderro, setEmpidErro] = useState(false);
  const [emailerro, setEmailErro] = useState(false);
  const [addresserro, setAddressErro] = useState(false);
  const [contacterro, setContactErro] = useState(false);
  const [nicerro, setNicErro] = useState(false);

  ////////////HELPER////////////////
  const [usernamehelper, setUsernameHelper] = useState("");
  const [passwordhelper, setPasswordHelper] = useState("");
  const [namehelper, setNameHelper] = useState("");
  const [empidhelper, setEmpidHelper] = useState("");
  const [emailhelper, setEmailHelper] = useState("");
  const [addresshelper, setAddressHelper] = useState("");
  const [contacthelper, setContactHelper] = useState("");
  const [nichelper, setNicHelper] = useState("");

  /////////////REGEX/////////////////////
  var usernameRegex = /^[a-zA-Z0-9]+$/;
  var nameRegex = /^[a-zA-Z0-9]+$/;
  var addressRegex = /^[a-zA-Z0-9]+$/;
  var contactRegex = /^\d{10}$/;
  var nicRegex =
    /^(?:19|20)?\d{2}(?:[0-35-8]\d\d(?<!(?:000|500|36[7-9]|3[7-9]\d|86[7-9]|8[7-9]\d)))\d{4}(?:[vVxX])$/;
  var empidRegex = /^[a-zA-Z0-9]+$/;
  var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ///////////////////////////////////////

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
    if (value == "Admin" && empid == "") {
      setEmpidErro(true);
      setEmpidHelper("please fill employee id");
    } else if (value == "Admin" && !empidRegex.test(empid)) {
      setEmpidErro(true);
      setEmpidHelper("please fill valid employee id");
    } else if ((username == "") | (username == undefined)) {
      setUsernameErro(true);
      setUsernameHelper("please fill username");
    } else if (!usernameRegex.test(username)) {
      setUsernameErro(true);
      setUsernameHelper("please fill valid username");
    } else if ((name == "") | (name == undefined)) {
      setNameErro(true);
      setNameHelper("please fill name");
    } else if (!nameRegex.test(name)) {
      setNameErro(true);
      setNameHelper("please fill valid name");
    } else if (email == "") {
      setEmailErro(true);
      setEmailHelper("please fill email");
    } else if (!emailRegex.test(email)) {
      setEmailErro(true);
      setEmailHelper("please fill valid email");
    } else if (value == "Customer" && address == "") {
      setAddressErro(true);
      setAddressHelper("please fill address");
    } else if (value == "Customer" && !addressRegex.test(address)) {
      setAddressErro(true);
      setAddressHelper("please fill valid address");
    } else if (value == "Admin" && nic == "") {
      setNicErro(true);
      setNicHelper("please fill nic");
    } else if (value == "Admin" && !nicRegex.test(nic)) {
      setNicErro(true);
      setNicHelper("please fill valid nic");
    } else if (contact == "") {
      setContactErro(true);
      setContactHelper("please fill contact");
    } else if (!contactRegex.test(contact)) {
      setContactErro(true);
      setContactHelper("please fill valid contact");
    } else if (password == "") {
      setPasswordErro(true);
      setPasswordHelper("please fill password");
    } else if (!passwordRegex.test(password)) {
      setPasswordErro(true);
      setPasswordHelper("please fill valid password");
    } else {
      alert("okkk");
      if (value == "Customer") {
        axios({
          method: "POST",
          url: "http://192.168.42.235:8000/login",
          data: {
            username: username,
            empid: "None",
            name: name,
            nic: "None",
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
          url: "http://192.168.42.235:8000/login",
          data: {
            username: username,
            empid: empid,
            name: name,
            nic: nic,
            email: email,
            address: "None",
            contact: contact,
            password: password,
          },
        }).then((res) => {
          console.log(res.data);
        });
      }
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
            helperText={empidhelper}
            error={empiderro ? true : false}
            value={empid}
            id="standard-basic"
            onChange={(ev) => {
              setEmpid(ev.target.value);
            }}
            label="Emp ID"
          />
        )}
        <TextField
          helperText={usernamehelper}
          error={usernameerro ? true : false}
          value={username}
          id="standard-basic"
          onChange={(ev) => {
            setUsername(ev.target.value);
          }}
          label="Username"
        />
        <TextField
          helperText={namehelper}
          error={nameerro ? true : false}
          value={name}
          id="standard-basic"
          onChange={(ev) => {
            setName(ev.target.value);
          }}
          label="Name"
        />
        <TextField
          helperText={emailhelper}
          error={emailerro ? true : false}
          value={email}
          id="standard-basic"
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
          label="Email"
        />
        {value == "Customer" ? (
          <TextField
            helperText={addresshelper}
            error={addresserro ? true : false}
            value={address}
            id="standard-basic"
            onChange={(ev) => {
              setAddress(ev.target.value);
            }}
            label="Address"
          />
        ) : null}
        {value == "Customer" ? null : (
          <TextField
            helperText={nichelper}
            error={nicerro ? true : false}
            value={nic}
            id="standard-basic"
            onChange={(ev) => {
              setNic(ev.target.value);
            }}
            label="NIC"
          />
        )}
        <TextField
          helperText={contacthelper}
          error={contacterro ? true : false}
          value={contact}
          id="standard-basic"
          onChange={(ev) => {
            setContact(ev.target.value);
          }}
          label="Contact"
        />
        <TextField
          helperText={passwordhelper}
          error={passworderro ? true : false}
          value={password}
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
