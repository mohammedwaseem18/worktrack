import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../apiCalls";

function ManagerLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    console.log("login");
    e.preventDefault();

    const response = await loginUser(formData);

    if (response.success) {
      localStorage.setItem("user-token", response.authToken);
      if (response.user.role === "manager") {
        navigate("/manager-dashboard");
      } else {
        navigate("/employee-dashboard");
      }
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="loginbox">
        <h1 className="login-title">Login</h1>

        <div className="login-inputcontainer">
          <div>
            <label className="inp-component" htmlFor="username">
              <input
                value={formData.email}
                name="email"
                placeholder="Email Address *"
                className="login-input"
                onChange={handleChange}
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="inp-component">
              <input
                placeholder="Password *"
                className="login-input"
                type="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
            </label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        <div className="login-footer-desc">
          <p>
            Don't Have An Account? <Link to={"/signup"}> Manager Signup</Link>
          </p>
          <p>
           Employee Login
          </p>
        </div>
      </form>
      <div className="right-login"></div>
    </div>
  );
}

export default ManagerLogin;
