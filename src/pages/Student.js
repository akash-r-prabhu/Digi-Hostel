import { Navbar } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import {
  RaiseComplaintForm,
  ComplaintHistory,
  Chat,
} from "../components/index";
import { useStateValue } from "../context/StateProvider";
import { useEffect } from "react";
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
    if (!user?.user?.email) {
      navigate("/");
      console.log("not logged in");
    }
  }, [user.user]);
  const functions = useParams("function");
  if (functions.function == "home") {
    return (
      <>
        <Navbar nav={nav} />
        <h1>home</h1>
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
        <h1>notification</h1>
        <button className="chatButton" onClick={() => openChat()}>
          Chat
        </button>
      </>
    );
  } else if (functions.function == "chat") {
    return (
      <>
        <Navbar nav={nav} />
        <Chat isStudent={true} />
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
