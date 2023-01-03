import React from "react";
import { Form } from "react-bootstrap";
import "./login.css";

const Login = () => {
  const handleSubmit = () => {
    console.log("submit");
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
      <div
        className="col-5 d-flex justify-content-center"
        style={{ alignItems: "center" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="col-5 row my-4 d-flex justify-content-end font m-auto">
            <Form.Select aria-label="Default select example">
              <option>Login As</option>
              <option value="1">User</option>
              <option value="2">Vendor</option>
              <option value="2">Admin</option>
            </Form.Select>
          </div>
          <div className="row my-4">
            <label
              htmlFor="Email"
              className="col-4 d-flex justify-content-end font"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email-Id"
              name="Email"
              className="col-8"
            />
            {/* <div className="col-3 text-danger">{error.errorEmail}</div> */}
          </div>
          <div className="row my-4">
            <label
              htmlFor="pass"
              className="col-4 d-flex justify-content-end font"
            >
              Password
            </label>
            <input
              type="password"
              name="Password"
              placeholder="Enter Your Password"
              className="col-8"
            />
            {/* <div className="col-3 text-danger">{error.errorPassword}</div> */}
          </div>
          <div className="my-4 d-flex justify-content-center">
            <button type="submit" className="btn btn-success ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
