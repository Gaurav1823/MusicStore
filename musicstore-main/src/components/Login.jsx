import { useEffect, useRef, useState } from "react";
import { TextField, Button } from "@mui/material";
import { networkoperations } from "./services/api-client";
import { SearchPage } from "../pages/SearchPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Login = () => {
  const [message, setMessage] = useState("");
  const emailref = useRef(null);
  const pwdref = useRef(null);
  const dologin = async () => {
    const userinfo = {
      email: emailref.current.value,
      password: pwdref.current.value,
    };
    try {
      const response = await networkoperations.post(
        "http://localhost:1234/login",
        userinfo
      );
      setMessage(response.data.message);
      console.log(response.data.message);
    } catch (err) {
      console.log("error ", err);
    }
  };
  useEffect(() => {
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </Router>
    </>;
  }, []);
  return (
    <>
      <p>{message}</p>
      <TextField
        inputRef={emailref}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />

      <TextField
        inputRef={pwdref}
        id="outlined-basic"
        type="password"
        label="password"
        variant="outlined"
      />

      <Button onClick={dologin} variant="contained">
        login
      </Button>
    </>
  );
};
