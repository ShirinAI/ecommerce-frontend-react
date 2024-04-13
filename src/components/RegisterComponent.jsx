import React, { useState } from "react";
import { registerAPICall } from "../services/AuthService";

const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleRegistrationForm(e) {
    e.preventDefault();

    // Validate inputs
    if (!name) {
      setNameError("Name is required");
      return;
    }
    if (!username) {
      setUsernameError("Username is required");
      return;
    }
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    const register = { name, username, email, password };

    registerAPICall(register)
      .then((response) => {
        console.log(response.data);
        setRegistrationStatus("success");
      })
      .catch((error) => {
        console.error(error);
        setRegistrationStatus("error");
      });
  }
  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center"> User Registration Form </h2>
            </div>

            {registrationStatus === "success" && (
              <div className="alert alert-success" role="alert">
                You have been successfully registered!
              </div>
            )}

            {registrationStatus === "error" && (
              <div className="alert alert-danger" role="alert">
                Registration failed. Please try again.
              </div>
            )}
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <label className="col-md-3 control-label"> Name </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                    {nameError && <div className="text-danger">{nameError}</div>}
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3 control-label"> Username </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    {usernameError && <div className="text-danger">{usernameError}</div>}
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3 control-label"> Email </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    {emailError && <div className="text-danger">{emailError}</div>}
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3 control-label"> Password </label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    {password && <div className="text-danger">{passwordError}</div>}
                  </div>
                </div>

                <div className="form-group mb-3">
                  <button className="btn btn-primary" onClick={(e) => handleRegistrationForm(e)}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
