import { Navbar } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import {
  RaiseComplaintForm,
  ComplaintHistory,
  Chat,
  Notifications,
  Home,
} from "../components";
import { useStateValue } from "../context/StateProvider";
import { useEffect } from "react";
import "../style/Student.css";
const Student = ({ nav }) => {
  const [user, dispatch] = useStateValue();
  const navigate = useNavigate();
  const openChat = () => {
    // setDisplayPopup(!displayPopup);
    // console.log("open chat");
    navigate("/student/chat");
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
      setTimeout(() => {
        dispatch({
          type: "SET_USER",
          user: JSON.parse(user),
          user_type: JSON.parse(user_type),
        });
      }, 5000);
      console.log("user", JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    const user_type = window.localStorage.getItem("user_type");
    if (user && user_type) {
      // TIMEOUT
      setTimeout(() => {
        dispatch({
          type: "SET_USER",
          user: JSON.parse(user),
          user_type: JSON.parse(user_type),
        });
      }, 5000);
      console.log("user", JSON.parse(user));
    }
    if (!user) {
      navigate("/");
      console.log("not logged in");
    }
  }, [user.user]);
  const functions = useParams("function");
  if (functions.function == "home") {
    return (
      <>
        <Navbar nav={nav} />
        <Home name={user?.user?.displayName} type={"student"} />
        <button className="chatButton" onClick={() => openChat()}>
          Chat
        </button>
      </>
    );
  } else if (functions.function == "complaint") {
    return (
      <>
        <Navbar nav={nav} isComplaintHistory={true} />
        <RaiseComplaintForm />
        <button className="chatButton" onClick={() => openChat()}>
          Chat
        </button>
      </>
    );
  } else if (functions.function == "notifications") {
    return (
      <>
        <Navbar nav={nav} />
        <Notifications />
      </>
    );
  } else if (functions.function == "chat") {
    return (
      <>
        <Navbar nav={nav} />
        <div className="student__Body">
          <Chat isStudent={true} className="chatBox" />
        </div>
        <button className="chatButton" onClick={() => closeChat()}>
          Close Chat
        </button>
      </>
    );
  } else if (functions.function == "complaintHistory") {
    return (
      <>
        <Navbar nav={nav} />
        <ComplaintHistory />
        <button className="chatButton" onClick={() => openChat()}>
          Chat
        </button>
      </>
    );
  }
};
export default Student;
