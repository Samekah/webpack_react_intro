import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  function handleSubmit() {
    event.preventDefault();
    console.log(formData);
    document.getElementById("form").reset();
    setFormData({
      name: "",
      password: "",
    });
  }

  function handleChange(event) {
    let name = event.target.name;
    let newFormData = {
      ...formData,
      [name]: event.target.value,
    };
    setFormData(newFormData);
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input type="text" id="name" name="name" onChange={handleChange}></input>
      <input type="password" id="password" name="password" onChange={handleChange}></input>
      <input type="submit" value="Submit" onSubmit={handleSubmit}></input>
    </form>
  );
};

export default Form;
