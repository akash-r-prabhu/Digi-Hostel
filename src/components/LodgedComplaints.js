import React, { useState, useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import db from "../database/firebase";
import ComplaintHistoryCard from "./ComplaintHistoryCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../style/LodgedComplaints.css";
function LodgedComplaints() {
  const [user] = useStateValue();
  const [complaints, setComplaints] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    db.collection("complaints").onSnapshot((snapshot) => {
      setComplaints(snapshot.docs.map((doc) => doc));
    });
    console.log(complaints);
  }, [user]);
  const handleClick = (e) => {
    console.log(e.id);
    if (e.function === "accept") {
      db.collection("complaints").doc(e.id).update({ status: "accepted" });
    }
    if (e.function === "reject") {
      db.collection("complaints").doc(e.id).update({ status: "rejected" });
    }
    if (e.function === "escalate") {
      db.collection("complaints")
        .doc(e.id)
        .update({ escalation: Number(e.currentEscalation) + 1 });
    }

    setRefresh(!refresh);
  };
  return (
    <div className="LodgedComplaints">
      {complaints.map(
        (complaint) =>
          complaint.data().status == null &&
          complaint.data().escalation == user?.user?.escalation && (
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card card-margin">
                    <div className="card-header no-border">
                      <h5 className="card-title">
                        {complaint.data().hostelName}
                      </h5>
                    </div>
                    <div className="card-body pt-0">
                      <div className="widget-49">
                        <div className="widget-49-title-wrapper">
                          <div className="widget-49-date-primary">
                            <span className="widget-49-date-day">
                              {complaint.data().escalation}
                            </span>
                          </div>
                          <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title">
                              {complaint.data().issuecategory}
                            </span>
                            <span className="widget-49-meeting-time">
                              {complaint.data().availability}
                            </span>
                          </div>
                        </div>
                        <ol className="widget-49-meeting-points">
                          <span>{complaint.data().description}</span>
                        </ol>
                        <Button
                          variant="primary "
                          size="sm"
                          onClick={() => {
                            handleClick({
                              id: complaint.id,
                              function: "accept",
                            });
                          }}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => {
                            handleClick({
                              id: complaint.id,
                              function: "reject",
                            });
                          }}
                        >
                          Reject
                        </Button>
                        {user?.user?.escalation != 3 && (
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => {
                              handleClick({
                                id: complaint.id,
                                function: "escalate",
                                currentEscalation: complaint.data().escalation,
                              });
                            }}
                          >
                            Escalate
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default LodgedComplaints;
