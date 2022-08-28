import { Navbar } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import { RaiseComplaintForm, ComplaintHistory } from "../components/index";
import { useStateValue } from "../context/StateProvider";
import { useEffect } from "react";
const Student = ({ nav }) => {
  const [user] = useStateValue();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.user) {
      navigate("/");
    }
  }, [user.user]);
  const functions = useParams("function");
  console.log(functions.function);
  if (functions.function == "home") {
    return (
      <>
        <Navbar nav={nav} />
        <h1>home</h1>
      </>
    );
  } else if (functions.function == "complaint") {
    return (
      <>
        <Navbar nav={nav} />
        <RaiseComplaintForm />
        <button
          onClick={() => {
            navigate("/student/complaintHistory");
          }}
        >
          View Complaint history
        </button>
      </>
    );
  } else if (functions.function == "notifications") {
    return (
      <>
        <Navbar nav={nav} />
        <h1>notification</h1>
      </>
    );
  } else if (functions.function == "chat") {
    return (
      <>
        <Navbar nav={nav} />
        <h1>chat</h1>
      </>
    );
  } else if (functions.function == "complaintHistory") {
    return (
      <>
        <Navbar nav={nav} />
        <ComplaintHistory />
      </>
    );
  }
};
export default Student;
