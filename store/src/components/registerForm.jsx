import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { register } from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = async () => {
    // Call the server
    try {
      const response = await register(this.state.data);
      console.log(response);
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmVkb2VAZXhhbXBsZS5jb20iLCJwYXNzd29yZCI6InBhc3N3b3JkMTIzIiwibmFtZSI6ImphbmVkb2UiLCJpZCI6Mn0.b36Qg47Ac5gDL-myJuacJXoGrWCt6OcGvVLPJIdOVK4";
      auth.loginWithJwt(token);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="container py-5">
        <div className="bg-white py-5 rounded">
          <div className="container">
            <h1 className="text-center mb-5">Register</h1>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("username", "Username", "email")}
                  {this.renderInput("password", "Password", "password")}
                  {this.renderInput("name", "Name")}
                  {this.renderButton("Register")}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
