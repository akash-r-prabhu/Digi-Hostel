import React from "react";
import "../style/ComplaintHistoryCard.css";
function ComplaintHistoryCard({ complaint }) {
  return (
    <div className="ComplaintHistoryCard">
      <h1>{complaint.hostelName}</h1>
      <h3>{complaint.issuecategory}</h3>
      <p>
        Filed by {complaint.personName} {complaint.userMail}
      </p>
      <p>{complaint.description}</p>
    </div>
  );
}

export default ComplaintHistoryCard;
