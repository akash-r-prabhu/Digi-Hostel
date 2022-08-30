import { Navbar } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import {
  RaiseComplaintForm,
  ComplaintHistory,
  Chat,
  Notifications,
  Home,
  Accordion,
  ComplaintCard
} from "../components";
import { useStateValue } from "../context/StateProvider";
import { BsChatDots } from "react-icons/bs";
import { useEffect } from "react";
import "../style/Student.css";

const ChatOpenButton = ({ onClick }) => {
  return (
    <div>
      <button className="chatButton" onClick={onClick}>
        Chat {" "}<BsChatDots />
      </button>
    </div>
  );
};

const ChatCloseButton = ({ onClick }) => {
  return (
    <div>
      <button className="chatButton" onClick={onClick}>
        Close Chat
      </button>
    </div>
  );
};

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
        <Accordion name={user?.user?.displayName} type={"student"} />
        <Notifications />
        <ChatOpenButton onClick={() => openChat()} />
      </>
    );
  } else if (functions.function == "complaint") {
    return (
      <>
        <Navbar nav={nav} isComplaintHistory={true} />
        <RaiseComplaintForm />
        <ChatOpenButton onClick={() => openChat()} />
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
        <ChatCloseButton onClick={() => closeChat()} />
      </>
    );
  } else if (functions.function == "complaintHistory") {
    return (
      <>
        <Navbar nav={nav} />
        <ComplaintHistory />
        <ChatOpenButton onClick={() => openChat()} />
      </>
    );
  }
};
export default Student;
