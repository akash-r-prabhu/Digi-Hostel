import "./App.css";
import Sidebar from "./components/Sidebar";
import {Login, Student, HomePage, Admin} from './pages'
import ComplaintHistory from "./components/ComplaintHistory";
import RaiseComplaintForm from "./components/RaiseComplaintForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { Navbar } from "./components";
function App() {
  const [user, { dispatch }] = useStateValue();
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signin" element={<Login />}/>
        <Route path="/student" element={<Student nav="student"/>}/>
        <Route path="/admin" element={<Admin nav="admin"/>}/>
      </Routes>
    </div>
  );
}

export default App;
