import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

function ManagerSignup() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",

    phno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phno", formData.phno);
    formDataToSend.append("image", image);

    const response = await fetch(
      "https://ems-backend-w5vv.onrender.com/auth/manager-signup",
      {
        method: "POST",
        body: formDataToSend,
      }
    );
    const data = await response.json();
    console.log(data, "lklk");
    navigate("/login")
    if (data.success) {
      localStorage.setItem("user-token", data.authToken);
      toast.success("Registered succesfully", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.error(data.errors[0].msg, {
        autoClose: 2000,
        closeOnClick: true,
        theme: "dark",
        transition: Bounce,
      });
      console.error("Error:", data);
    }
  };

  return (
    <div className="login">
      <form className="loginbox" onSubmit={handleSubmit}>
        <h1 className="login-title">Manager Signup</h1>

        <div className="login-inputcontainer">
          <div>
            <label htmlFor="name" className="inp-component">
              <input
                value={formData.name}
                name="name"
                placeholder="Name *"
                className="login-input"
                onChange={handleChange}
                type="text"
              />
            </label>
          </div>
          <div>
            <label className="inp-component" htmlFor="email">
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
            <label htmlFor="branch" className="inp-component">
              <input
                placeholder="phno *"
                className="login-input"
                type="text"
                value={formData.phno}
                onChange={handleChange}
                name="phno"
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

          <div>
            <label htmlFor="conform-password" className="inp-component">
              <input
                className="login-input"
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Signup
        </button>
        <div className="login-footer-desc">
          <p>
            Already Have An Account? <Link to={"/login"}> Login</Link>
          </p>
        </div>
      </form>
      <div className="right-login"></div>
    </div>
  );
}

export default ManagerSignup;
