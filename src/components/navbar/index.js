import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavTopLink,
} from "./styles/navbar";
import { useNavigate } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import { useStateValue } from "../../context/StateProvider";
const Navbar = ({ nav, isComplaintHistory }) => {
  const navigate = useNavigate();
  const [user, dispatch] = useStateValue();
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
            <NavLink onClick={() => navigate("/student/complaint")} activeStyle>
              <h1>Complaint</h1>
            </NavLink>
            <NavLink
              onClick={() => navigate("/student/complaintHistory")}
              activeStyle
            >
              <h1>Complaint History</h1>
            </NavLink>
            <NavLink
              onClick={() => navigate("/student/notifications")}
              activeStyle
            >
              <h1>Notifications</h1>
            </NavLink>
            <NavLink onClick={() => navigate("/student/chat")} activeStyle>
              <h1>Chat</h1>
            </NavLink>
          </NavMenu>
        )}
        {nav == "admin" && (
          <NavMenu>
            <NavLink onClick={() => navigate("/admin/complaints")} activeStyle>
              <h1>Complaints</h1>
            </NavLink>
            <NavLink activeStyle>
              <h1>Push Notification</h1>
            </NavLink>
            <NavLink activeStyle>
              <h1>Chat</h1>
            </NavLink>
          </NavMenu>
        )}
        {nav == "student" && (
          <NavBtn>
            <NavBtnLink
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("user_type");
                dispatch({
                  type: "LOGOUT",
                });
                console.log("logged out");
              }}
              to="/"
            >
              Sign Out
            </NavBtnLink>
          </NavBtn>
        )}
        {nav == "superAdmin" && (
          <NavBtn>
            <NavLink activeStyle onClick={() => navigate("/admin/home")}>
              <h1>Admin Verifications</h1>
            </NavLink>
            <NavBtnLink
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("user_type");
                dispatch({
                  type: "LOGOUT",
                });
                console.log("logged out");
              }}
              to="/"
            >
              Sign Out
            </NavBtnLink>
          </NavBtn>
        )}
        {nav == "admin" && (
          <NavBtn>
            <NavBtnLink
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("user_type");
                dispatch({
                  type: "LOGOUT",
                });
                console.log("logged out");
              }}
              to="/"
            >
              Sign Out
            </NavBtnLink>
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
