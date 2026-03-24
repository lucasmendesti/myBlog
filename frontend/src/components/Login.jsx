import React from "react";
import { verifyUser } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await verifyUser(user);
    if (response) {    
      navigate("/home");
      sessionStorage.setItem("User", response)
    } else {
      alert("Login failed");
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        onChange={handleChange}
        name="email"
        required
        maxLength={40}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={handleChange}
        name="password"
        required
        maxLength={20}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
