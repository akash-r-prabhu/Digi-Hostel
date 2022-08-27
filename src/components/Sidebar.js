import React from "react";
import Button from "@mui/material/Button";
import "../style/Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  let navigate = useNavigate();
  return (
    <div className="Sidebar">
      <Button
        variant="outlined"
        className="Sidebar__button"
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        Home
      </Button>
      <Button
        variant="outlined"
        className="Sidebar__button"
        onClick={() => {
          navigate("/raiseComplaint", { replace: true });
        }}
      >
        Raise Complaint
      </Button>
      <Button
        variant="outlined"
        className="Sidebar__button"
        onClick={() => {
          navigate("/complaintHistory", { replace: true });
        }}
      >
        Complaint history
      </Button>
    </div>
  );
}

export default Sidebar;
