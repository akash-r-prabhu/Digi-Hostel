import React, { useEffect, useState } from "react";
import { Navbar } from "../components/index";
import { useStateValue } from "../context/StateProvider";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const [{ user, user_type }, dispatch] = useStateValue();

  console.log(user_type);

  useEffect(() => {
    if (!user_type) {
      navigate("/");
    }
  }, []);
  if (user_type == "student") {
    navigate("/");
  }
  if (user_type == "superAdmin") {
    return (
      <>
        <Navbar />
        <h1>requests</h1>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
      </>
    );
  }
};

export default Admin;
