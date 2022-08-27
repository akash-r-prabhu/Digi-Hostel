import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import "../style/RaiseComplaintForm.css";
import db from "../database/firebase";
import { useStateValue } from "../context/StateProvider";
function RaiseComplaintForm() {
  const [user] = useStateValue();
  const [hostelName, setHostelName] = useState("");
  const [issuecategory, setIssueCategory] = useState("");
  const [personName, setPersonName] = useState("");
  const [availability, setAvailability] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [description, setDescription] = useState("");
  //   useEffect(() => {
  //     console.log(issuecategory);
  //   }, [issuecategory]);
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("complaints").doc().set({
      userMail: user?.user?.email,
      hostelName: hostelName,
      issuecategory: issuecategory,
      personName: personName,
      availability: availability,
      roomNo: roomNo,
      phoneNo: phoneNo,
      description: description,
    });
    // setHostelName("");
    // setIssueCategory("");
    // setPersonName("");
    // setAvailability("");
    // setRoomNo("");
    // setPhoneNo("");
    // setDescription("");
  };
  return (
    <div className="RaiseComplaintForm">
      <form>
        <div className="form__element">
          <label>Hostel Name</label>
          <input
            type="text"
            placeholder="Type hostel name"
            onChange={(e) => {
              setHostelName(e.target.value);
            }}
          />
        </div>
        <div className="form__element">
          <label>Category of Issue</label>
          <select
            onChange={(e) => {
              setIssueCategory(e.target.value);
            }}
          >
            <option value="">Select an option</option>
            <option value="cleanliness">Cleanliness</option>
            <option value="electricity">Electricity</option>
          </select>
        </div>
        <div className="form__element">
          <label>Name of the Person</label>
          <input
            type="text"
            placeholder="Type name of the person"
            onChange={(e) => {
              setPersonName(e.target.value);
            }}
          />
        </div>
        <div className="form__element">
          <label>Availability</label>
          <input
            type="time"
            placeholder="Type availability"
            onChange={(e) => {
              setAvailability(e.target.value);
            }}
          />
        </div>
        <div className="form__element">
          <label>Room Number</label>
          <input
            type="text"
            placeholder="Type room number"
            onChange={(e) => {
              setRoomNo(e.target.value);
            }}
          />
        </div>
        <div className="form__element">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Type phone number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />
        </div>
        <div className="form__element">
          <label>Description of Issue</label>
          <textarea
            placeholder="Type description of issue"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default RaiseComplaintForm;
