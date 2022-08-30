import React, { useEffect, useState } from "react";
import {
  Navbar,
  LodgedComplaints,
  Chat,
  Notifications,
  Home,
} from "../components/index";
import { useStateValue } from "../context/StateProvider";
import { useNavigate, useParams } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import db from "../database/firebase";
import "../style/Admin.css";
// your-app.js
import Swal from "sweetalert2";

const Admin = () => {
  const navigate = useNavigate();
  const [{ user, user_type }, dispatch] = useStateValue();
  const [admins, setAdmins] = useState([]);
  const [escalations, setEscalations] = useState();
  const [displayPopup, setDisplayPopup] = useState(false);
  const [notification, setNotification] = useState("");
  const functions = useParams().function;
  const pushNotification = (e) => {
    e.preventDefault();
    if (notification.length > 0) {
      db.collection("notifications").add({
        desc: notification,
      });
      setNotification("");
    }
  };
  const openChat = () => {
    // setDisplayPopup(!displayPopup);
    // console.log("open chat");
    navigate("/admin/chat");
  };
  const closeChat = () => {
    navigate(-1);
    console.log("close chat");
  };
  useEffect(() => {
    const user = window.localStorage.getItem("user");
    const user_type = window.localStorage.getItem("user_type");
    if (user && user_type) {
      // TIMEOUT
      // setTimeout(() => {
        dispatch({
          type: "SET_USER",
          user: JSON.parse(user),
          user_type: user_type,
        });
      // }, 500);
      console.log("user", JSON.parse(user));
    }
    if (!user) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    db.collection("admins").onSnapshot((snapshot) => {
      setAdmins(snapshot.docs.map((doc) => doc));
    });
  }, [admins]);
  const rejectApplication = (id) => {
    db.collection("admins").doc(id).delete();
  };
  const acceptApplication = async (id) => {
    const { value: escalation } = await Swal.fire({
      title: "Select Escalation Level",
      input: "select",
      inputOptions: {
        Levals: {
          1: "Escalation Level 1",
          2: "Escalation Level 2",
          3: "Escalation Level 3",
        },
      },
      inputPlaceholder: "Select a level",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            resolve();
          } else {
            resolve("You need to select a level :)");
          }
        });
      },
    });

    if (escalation) {
      Swal.fire(`You selected: ${escalation}`);
      setEscalations(escalation);
      db.collection("admins").doc(id).update({
        isVerified: true,
        escalation: escalation,
      });
    }
  };
  // useEffect(() => {
  // const user = window.localStorage.getItem("user");
  // const user_type = window.localStorage.getItem("user_type");
  // if (user && user_type) {
  //   setTimeout(() => {
  //     dispatch({
  //       type: "SET_USER",
  //       user: JSON.parse(user),
  //       user_type: user_type,
  //     });
  //   }, 5000);
  //   console.log("user", JSON.parse(user));
  // }
  // if (!user) {
  //   navigate("/");
  // }
  // }, [user]);
  if (user_type == "student") {
    navigate("/");
  }
  if (user_type == "superAdmin") {
    return (
      <>
        <Navbar nav="superAdmin" />
        {admins.map(
          (admin) =>
            !admin.data().isSuperAdmin &&
            !admin.data().escalation && (
              <div className="adminRequests">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card card-margin">
                        <div className="card-header no-border">
                          <h5 className="card-title">
                            Name : {admin.data().name}
                          </h5>
                        </div>
                        <div className="card-body pt-0">
                          <div className="widget-49">
                            <div className="widget-49-title-wrapper">
                              <div className="widget-49-meeting-info">
                                <span className="widget-49-pro-title">
                                  Email : {admin.data().email}
                                </span>
                              </div>
                            </div>
                            <br />
                            <button
                              onClick={() => {
                                rejectApplication(admin.id);
                              }}
                              className="btn btn-danger"
                            >
                              Reject
                            </button>
                            <button
                              onClick={() => {
                                acceptApplication(admin.id);
                              }}
                              className="btn btn-success"
                            >
                              Accept
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </>
    );
  } else if (user_type == "admin") {
    if (user && !user?.escalation) {
      Swal.fire("Your profile is not verified yet");
      navigate("/");
    }
    if (functions == "home") {
      return (
        <>
          <Navbar nav="admin" />
          <Home name={user?.name} type="admin" />
          <div className="pop">
            {displayPopup && <Chat className="chatPopup" />}
            <button className="chatButton" onClick={() => openChat()}>
              Chat
            </button>
          </div>
        </>
      );
    } else if (functions == "complaints") {
      return (
        <>
          <Navbar nav="admin" />
          <h1>Complaints</h1>
          <LodgedComplaints />

          <div className="pop">
            {displayPopup && <Chat className="chatPopup" />}
            <button className="chatButton" onClick={() => openChat()}>
              Chat
            </button>
          </div>
        </>
      );
    } else if (functions == "chat") {
      return (
        <>
          <Navbar nav="admin" />
          <div className="admin__Body">
            <Chat className="chatBox" />
          </div>
          <button className="chatButton" onClick={() => closeChat()}>
            Close Chat
          </button>
        </>
      );
    } else if (functions == "pushNotification") {
      return (
        <>
          <Navbar nav="admin" />
          <div className="admin__Body">
            <form className="sendNotificationForm">
              <textarea
                type="textarea"
                placeholder="Enter the notification"
                onChange={(e) => setNotification(e.target.value)}
                value={notification}
              />
              <button>
                <TelegramIcon
                  onClick={(e) => {
                    pushNotification(e);
                  }}
                />
              </button>
            </form>
            <Notifications />
          </div>
        </>
      );
    }
  }
};

export default Admin;
