import React, { useEffect, useState } from "react";
import "../style/ComplaintHistory.css";
import db from "../database/firebase";
import { useStateValue } from "../context/StateProvider";
import ComplaintCard from './complaintcard'
function ComplaintHistory() {
  const [user] = useStateValue();
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
    db.collection("complaints").onSnapshot((snapshot) => {
      setComplaints(snapshot.docs.map((doc) => doc.data()));
    });
    console.log(complaints);
  }, [user]);
  return (
    <div className="ComplaintHistory">
      {complaints.map((complaint) =>
        complaint.userMail === user?.user?.email ? (
          <ComplaintCard complaint={complaint} />
        ) : null
      )}
    </div>
  );
}

export default ComplaintHistory;
