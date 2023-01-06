import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [error, setError] = useState({
    errorEmail: "",
    errorPassword: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.userEmail) {
      setError({ errorEmail: "Email is required" });
      return;
    } else {
      setError({ errorEmail: "" });
    }

    if (!data.userPassword) {
      setError({ errorPassword: "Password is required" });
      return;
    } else {
      setError({ errorPassword: "" });
    }
    navigate("/");
  };
  return (
    <div className="container-fluid row login" id="body">
      <div className="col-7 px-0">
        <img
          src="https://images.unsplash.com/photo-1587271636175-90d58cdad458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="login"
          className="img-fluid image-1"
/>
      </div>
      <div className="col-4 mt-5" >
        <form onSubmit={handleSubmit}>
          <div className="col-4 row my-5 d-flex justify-content-end font m-auto">
            <Form.Select aria-label="Default select example" className="input-mod-1">
              <option>Login As</option>
              <option value="1">User</option>
              <option value="2">Vendor</option>
              <option value="2">Admin</option>
            </Form.Select>
          </div>
          <div className="row mt-4">
            <label
              htmlFor="Email"
              className="col-4 d-flex justify-content-end font align-items-center"
            >
              Email
            </label>
            <input
              name="userEmail"
              type="email"
              placeholder="Enter Your Email-Id"
              className="col-7 input-mod-1"
              onChange={handleChange}
            />
          </div>
          <div className="row" style={{ height: "10px" }}>
            <span className="text-danger d-flex justify-content-center">
              {error.errorEmail}
            </span>
          </div>

          <div className="row mt-4">
            <label
              htmlFor="pass"
              className="col-4 d-flex justify-content-end font align-items-center"
            >
              Password
            </label>
            <input
              name="userPassword"
              type="password"
              placeholder="Enter Your Password"
              className="col-7 input-mod-1"
              onChange={handleChange}
            />
          </div>
          <div className="row" style={{ height: "10px" }}>
            <span className="text-danger d-flex justify-content-center">
              {error.errorPassword}
            </span>
          </div>

          <div className="my-4 d-flex justify-content-center ">
            <button
              type="submit"
              style={{ width: "30%", marginLeft:"135px", color: "white" }}
              className="btn"
              id="loginbtn"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
