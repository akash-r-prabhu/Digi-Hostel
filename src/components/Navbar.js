import React from "react";
import "../style/Navbar.css";
import Avatar from "@mui/material/Avatar";
import { useStateValue } from "../context/StateProvider";
function Navbar() {
  const [user] = useStateValue();
  return (
    <div className="Navbar">
      <Avatar
        alt="user Name"
        src={user?.user?.photoURL}
        className="Navbar__avatar"
      />
    </div>
  );
}

export default Navbar;
