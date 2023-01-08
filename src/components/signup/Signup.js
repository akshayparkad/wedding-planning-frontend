import "./signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { userData } from "../../Service/User";

export function Signup() {
  let [data, setData] = useState({
    username: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
    type: "",
  });
  const navigate = useNavigate();
  let [error, setError] = useState({
    errorName: "",
    errorEmail: "",
    errorLocation: "",
    errorPassword: "",
    errorRePassword: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      var response = await userData(data);
      console.log(response.data);
      navigate("/signin");
    }
  };

  var validate = () => {
    error = {};
    const nameregx = /^([a-z]+(-| )?)+$/i;
    const emailregx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const Passwordregx =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // validation
    if (!data.username) {
      setError({ errorName: "Name is required" });
      return false;
    } else if (!data.username.match(nameregx)) {
      setError({ errorName: "Invalid name" });
      return false;
    } else {
      setError({ errorName: "" });
    }

    if (!data.email) {
      setError({ errorEmail: "Email is required" });
      return false;
    } else if (!data.email.match(emailregx)) {
      setError({ errorEmail: "Invalid email" });
      return false;
    } else {
      setError({ errorEmail: "" });
    }

    if (!data.location) {
      setError({ errorLocation: "Location is required" });
      return false;
    }

    if (!data.password) {
      setError({ errorPassword: "Password is required" });
      return false;
    } else if (!data.password.match(Passwordregx)) {
      setError({
        errorPassword: "Password must be like Abcde@123",
      });
      return false;
    } else {
      setError({ errorPassword: "" });
    }

    if (!data.confirmPassword) {
      setError({ errorRePassword: "Confirm password is required" });
      return false;
    } else if (data.password !== data.confirmPassword) {
      setError({
        errorRePassword: "Password does not match",
      });
      return false;
    } else {
      setError({ errorRePassword: "" });
      return true;
    }
  };

  return (
    <div className="container-fluid row signup" id="signbody">
      <div className="col-7 p-0">
        <img
          src="https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/1/delhi_bg.jpeg"
          alt="signup"
          className="img-fluid image-1"
        />
      </div>
      <div className="col-4">
        <div className="d-flex justify-content-center">
          <img
            src="Wedlogo.png"
            style={{ height: "20%", width: "20%" }}
            alt="Wedlogo.png"
            className="Wedlogo.png"
          />
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="col-4 row my-4 d-flex justify-content-end font m-auto">
              <Form.Select
                aria-label="Default select example"
                name="type"
                onChange={handleChange}
              >
                <option>Register As</option>
                <option value="user">User</option>
                <option value="vendor">Vendor</option>
              </Form.Select>
            </div>
            <div className="row mt-4">
              <label
                htmlFor="username"
                className="col-4 d-flex justify-content-end font align-items-center"
              >
                Name
              </label>
              <input
                name="username"
                type="text"
                placeholder="Enter Your Name"
                className="col-7 input-mod-1"
                onChange={handleChange}
              />
            </div>
            <div className="row" style={{ height: "10px" }}>
              <span className="text-danger d-flex justify-content-center">
                {error.errorName}
              </span>
            </div>
            <div className="row mt-4">
              <label
                htmlFor="email"
                className="col-4 d-flex justify-content-end font align-items-center"
              >
                Email-Id
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email-Id"
                onChange={handleChange}
                className="col-7  input-mod-1"
              />
            </div>
            <div className="row" style={{ height: "10px" }}>
              <span className="text-danger d-flex justify-content-center">
                {error.errorEmail}
              </span>
            </div>

            <div className="row mt-4">
              <label
                htmlFor="location"
                className="col-4 d-flex justify-content-end font align-items-center"
              >
                Location
              </label>
              <input
                name="location"
                type="text"
                placeholder="Enter Your Location"
                onChange={handleChange}
                className="col-7  input-mod-1"
              />
            </div>
            <div className="row" style={{ height: "10px" }}>
              <span className="text-danger d-flex justify-content-center">
                {error.errorLocation}
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
                onChange={handleChange}
                className="col-7  input-mod-1"
              />
            </div>
            <div className="row" style={{ height: "10px" }}>
              <span className="text-danger d-flex justify-content-center">
                {error.errorPassword}
              </span>
            </div>

            <div className="row mt-4">
              <label
                htmlFor="repass"
                className="col-4 d-flex justify-content-end font align-items-center"
              >
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                onChange={handleChange}
                className="col-7 input-mod-1"
              />
            </div>
            <div className="row" style={{ height: "10px" }}>
              <span className="text-danger d-flex justify-content-center">
                {error.errorRePassword}
              </span>
            </div>
            <div className="row my-4 d-flex justify-content-center">
              <button
                type="submit"
                style={{ width: "30%", color: "white", marginLeft: "145px"}}
                id="signbtn"
                className="btn "
              >
                {" "}
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
