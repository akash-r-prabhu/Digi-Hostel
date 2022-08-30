import React, { useEffect, useState } from "react";
import "../style/Chat.css";
import { useStateValue } from "../context/StateProvider";
import db from "../database/firebase";
import firebase from "firebase/compat/app";
import TelegramIcon from "@mui/icons-material/Telegram";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
import { FaHotel } from "react-icons/fa";
function Chat({ isStudent }) {
  const [{ user, user_type }, dispatch] = useStateValue();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      console.log(user);
      if (isStudent) {
        console.log("is student");
        db.collection("messages").add({
          message: message,
          name: user?.displayName,
          email: user?.email,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          userType: user_type,
          photoURL: user?.photoURL,
        });
      } else {
        db.collection("messages").add({
          name: user?.name,
          email: user?.email,
          message: message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          userType: user_type,
        });
      }
    }
    setMessage("");
  };
  return (
    <div className="Chat">
      <div className="header">
        {/* <ChatIcon /> */}
        <FaHotel className="icon" />
        <h1>
          DigiHostel <p>Chat beta</p>
        </h1>
      </div>
      <div className="chatBody">
        {/* <p className="message">Hello</p>
        <p className="message user_message">Hi</p> */}
        {messages.map((message) => (
          <p className={`message ${message.userType}`}>
            {message?.photoURL ? (
              <img
                src={message?.photoURL}
                alt="profile"
                className="chatProfileImage"
              />
            ) : (
              <PersonIcon className="chatAvatarIcon" />
            )}
            {message.name} : {message.message}
          </p>
        ))}
      </div>
      <div className="footer">
        <form>
          <input
            className="input"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></input>
          <button
            className="button"
            type="submit"
            onClick={(e) => sendMessage(e)}
          >
            <TelegramIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
