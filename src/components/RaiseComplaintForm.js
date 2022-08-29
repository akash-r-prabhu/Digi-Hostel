import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import "../style/RaiseComplaintForm.css";
import db from "../database/firebase";
import { useStateValue } from "../context/StateProvider";
import Swal from "sweetalert2";
import {
  Container,
  CardElement,
  Link,
  Text,
  SubText,
  Input,
  Label,
  ButtonContainer,
} from "../components/signin/styles/signin";
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
    console.log(user);

    db.collection("complaints").doc().set({
      userMail: user?.user?.email,
      hostelName: hostelName,
      issuecategory: issuecategory,
      personName: personName,
      availability: availability,
      roomNo: roomNo,
      phoneNo: phoneNo,
      description: description,
      escalation: "1",
      status: null,
    });
    setHostelName("");
    setIssueCategory("");
    setPersonName("");
    setAvailability("");
    setRoomNo("");
    setPhoneNo("");
    setDescription("");
    Swal.fire("Complaint Raised Successfully", "", "success");
  };
  //   <div className="RaiseComplaintForm">
  //     <form>
  //       <div className="form__element">
  //         <label>Hostel Name</label>
  //         <input
  //           type="text"
  //           placeholder="Type hostel name"
  //           onChange={(e) => {
  //             setHostelName(e.target.value);
  //           }}
  //         />
  //       </div>
  //       <div className="form__element">
  //         <label>Category of Issue</label>
  //         <select
  //           onChange={(e) => {
  //             setIssueCategory(e.target.value);
  //           }}
  //         >
  //           <option value="">Select an option</option>
  //           <option value="cleanliness">Cleanliness</option>
  //           <option value="electricity">Electricity</option>
  //         </select>
  //       </div>
  //       <div className="form__element">
  //         <label>Name of the Person</label>
  //         <input
  //           type="text"
  //           placeholder="Type name of the person"
  //           onChange={(e) => {
  //             setPersonName(e.target.value);
  //           }}
  //         />
  //       </div>
  //       <div className="form__element">
  //         <label>Availability</label>
  //         <input
  //           type="time"
  //           placeholder="Type availability"
  //           onChange={(e) => {
  //             setAvailability(e.target.value);
  //           }}
  //         />
  //       </div>
  //       <div className="form__element">
  //         <label>Room Number</label>
  //         <input
  //           type="text"
  //           placeholder="Type room number"
  //           onChange={(e) => {
  //             setRoomNo(e.target.value);
  //           }}
  //         />
  //       </div>
  //       <div className="form__element">
  //         <label>Phone Number</label>
  //         <input
  //           type="tel"
  //           placeholder="Type phone number"
  //           pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
  //           onChange={(e) => {
  //             setPhoneNo(e.target.value);
  //           }}
  //         />
  //       </div>
  //       <div className="form__element">
  //         <label>Description of Issue</label>
  //         <textarea
  //           placeholder="Type description of issue"
  //           onChange={(e) => {
  //             setDescription(e.target.value);
  //           }}
  //         />
  //       </div>

  //       <Button
  //         variant="primary"
  //         type="submit"
  //         onClick={(e) => {
  //           handleSubmit(e);
  //         }}
  //       >
  //         Submit
  //       </Button>
  //     </form>
  //   </div>
  // );
  return (
    <Container>
      <CardElement>
        <Text>Lodge a complaint</Text>
        <br />
        <Label>Hostel Name</Label>
        <Input
          onChange={(e) => {
            setHostelName(e.target.value);
          }}
          value={hostelName}
        ></Input>
        <Label>Category Of Issue</Label>
        <select
          className="formSelect"
          onChange={(e) => {
            setIssueCategory(e.target.value);
          }}
          value={issuecategory}
        >
          <option value="">Select an option</option>
          <option value="cleanliness">Cleanliness</option>
          <option value="electricity">Electricity</option>
        </select>
        <Label>Name of the Person</Label>
        <Input
          onChange={(e) => {
            setPersonName(e.target.value);
          }}
          value={personName}
        ></Input>
        <Label>Availability</Label>
        <Input
          type="time"
          onChange={(e) => {
            setAvailability(e.target.value);
          }}
          value={availability}
        ></Input>
        <Label>Room Number</Label>
        <Input
          onChange={(e) => {
            setRoomNo(e.target.value);
          }}
          value={roomNo}
        ></Input>
        <Label>Phone Number</Label>
        <Input
          onChange={(e) => {
            setPhoneNo(e.target.value);
          }}
          value={phoneNo}
        ></Input>
        <Label>Description of Issue</Label>
        <Input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></Input>
        <ButtonContainer>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </Button>
        </ButtonContainer>
      </CardElement>
    </Container>
  );
}

export default RaiseComplaintForm;
