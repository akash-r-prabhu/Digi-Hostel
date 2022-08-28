import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavTopLink
} from "./styles/navbar";
import { FaHotel } from "react-icons/fa";

const Navbar = ({ nav }) => {
  return (
    <>
      <Nav>
        <NavTopLink to="/">
          <FaHotel />
          <p>DigiHostel</p>
        </NavTopLink>
        <Bars />
        {nav == "main" && (
          <NavMenu>
            <NavLink to="about" activeStyle>
              <h1>About</h1>
            </NavLink>
            <NavLink to="contactus" activeStyle>
              <h1>Contact Us</h1>
            </NavLink>
          </NavMenu>
        )}
        {nav == "student" && (
          <NavMenu>
            <NavLink to="about" activeStyle>
              <h1>Complaint</h1>
            </NavLink>
            <NavLink to="notifications" activeStyle>
              <h1>Notifications</h1>
            </NavLink>
            <NavLink to="chat" activeStyle>
              <h1>Chat</h1>
            </NavLink>
          </NavMenu>
        )}
        {nav == "student" && (
          <NavBtn>
            <NavBtnLink to="/">Sign Out</NavBtnLink>
          </NavBtn>
        )}
        {nav == "main" && (
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
