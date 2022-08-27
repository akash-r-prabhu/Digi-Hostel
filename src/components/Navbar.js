import React from "react";
import "../style/Navbar.css";
import Avatar from "@mui/material/Avatar";
function Navbar() {
  return (
    <div className="Navbar">
      <Avatar
        alt="user Name"
        src="https://material-ui.com/static/images/avatar/1.jpg"
      />
    </div>
  );
}

export default Navbar;
