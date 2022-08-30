import React from "react";
import "../styles/Home.css";
function Home(props) {
  if (props.type == "student") {
    return (
      <div className="container">
        <div className="Home">
          <h1>Hey {props.name}</h1>
          <p>Welcome to the student homepage</p>
          <p>
            Here you can lodge a complaint , check hostel notification and chat
            with admin
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="homeContainer">
        <div className="Home">
          <h1>Hey {props.name}</h1>
          <p>Welcome to the Admins dashboard</p>
          <p>
            Here you can <br />
            1. Review complaints
            <br />
            2. Send Notifications
            <br />
            3. Chat with students
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
