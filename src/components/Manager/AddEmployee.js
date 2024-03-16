import React, { useState } from "react";
import "./AddEmployee.css";

function AddEmployee() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    position: "",
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
    formDataToSend.append("position", formData.position);
    formDataToSend.append("image", image);

    const response = await fetch("http://localhost:5000/auth/add-employee", {
      headers: {
            "x-auth-token": localStorage.getItem("user-token"),
          },
      method: "POST",
      body: formDataToSend,
    });
    const data = await response.json();
    console.log(data, "lklk");
    if (data.success) {
      alert("addedd successfully");
    }
    else {
      alert(data.errors[0].msg)
    }
  };
  return (
    <div className="contact-form">
      <label htmlFor="name">Name:</label>
      <input
        value={formData.name}
        name="name"
        placeholder="Name *"
        onChange={handleChange}
        type="text"
      />
      <label htmlFor="email">Email:</label>
      <input
        value={formData.email}
        name="email"
        placeholder="Email Address *"
        onChange={handleChange}
        type="text"
      />
      <label htmlFor="email">Password:</label>
      <input
        placeholder="Password *"
        type="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
      />
      <label htmlFor="email">Position:</label>
      <input
        placeholder="Possition *"
        type="text"
        value={formData.position}
        onChange={handleChange}
        name="position"
      />
      <label htmlFor="email">Phno:</label>
      <input
        placeholder="phno *"
        type="text"
        value={formData.phno}
        onChange={handleChange}
        name="phno"
      />
      <label htmlFor="image">Image:</label>
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default AddEmployee;
