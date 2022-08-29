import React from "react";
import "../style/ComplaintHistoryCard.css";
function ComplaintHistoryCard({ complaint }) {
  return (
    <div className="ComplaintHistoryCard">
      <h2>Hostel {complaint.hostelName}</h2>
      <h4>Category {complaint.issuecategory}</h4>
      <p>
        Filed by {complaint.personName} {complaint.userMail}
      </p>
      <p>Description - {complaint.description}</p>
      {!complaint.status ? <p>Status "pending"</p> : <p>Status {complaint.status}</p>}
      <p>Escalation Level {complaint.escalation}</p>
    </div>
  );
}

export default ComplaintHistoryCard;
