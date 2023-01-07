import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../Service/login";
import "./login.css";

const Login = ({ setJustBool, justBool }) => {
  var navigate = useNavigate();
  var [errorEmail, setEmail] = useState("");
  var [errorPassword, setPassword] = useState("");

  let [data, setData] = useState();

  var handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  

  var handleSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    var response = await getUserData(data.email, data.type);
    console.log(response);
    if (response.data.length == 0) {
      setEmail("*user doesn't found");
    } else {
      setEmail("");
      if (response.data.password === data.password) {
        setJustBool(!justBool);

        console.log(justBool);

        navigate(`/`);
      } else {
        setPassword("*incorrect password");
      }
    }
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
            <Form.Select
              aria-label="Default select example"
              name="type"
              onChange={handleChange}
              className="input-mod-1"
            >

              <option>Login As</option>
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
              <option value="admin">Admin</option>
            </Form.Select>
          </div>
          <div className="row mt-4">
            <label
              htmlFor="email"
              className="col-4 d-flex justify-content-end font align-items-center"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email-Id"
              className="col-7 input-mod-1"
              onChange={handleChange}
            />
          </div>
          <div className="row" style={{ height: "10px" }}>
            <span className="text-danger d-flex justify-content-center">
              {errorEmail}
            </span>
          </div>

          <div className="row mt-4">
            <label
              htmlFor="password"
              className="col-4 d-flex justify-content-end font align-items-center"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter Your Password"
              className="col-7 input-mod-1"
              onChange={handleChange}
            />
          </div>
          <div className="row" style={{ height: "10px" }}>
            <span className="text-danger d-flex justify-content-center">
              {errorPassword}
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
