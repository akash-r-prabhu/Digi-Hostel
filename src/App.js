import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import ComplaintHistory from "./components/ComplaintHistory";
import RaiseComplaintForm from "./components/RaiseComplaintForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
function App() {
  const [user, { dispatch }] = useStateValue();
  return (
    <div className="App">
      {!user?.user ? (
        <Login />
      ) : (
        <>
          {/* navbar */}
          <Navbar />
          <div className="app__Body">
            <Sidebar />
            <div className="body">
              <Routes>
                <Route path="/" element={<h1>Welcome</h1>} />
                <Route
                  path="/raiseComplaint"
                  element={<RaiseComplaintForm />}
                />
                <Route
                  path="/complaintHistory"
                  element={<ComplaintHistory />}
                />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
