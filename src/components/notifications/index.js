import React, { useEffect, useState } from "react";

import {
  Box,
  Container,
  Header,
  Content,
  Title,
  Text,
} from "./styles/notifications";
import { BiBell } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import db from "../../database/firebase";
const Notifications = () => {
  // const notifications = [
  //   {
  //     id: 1,
  //     first_name: "Yoshi",
  //     last_name: "Hariot",
  //     desc: "Monteggia's fracture of right ulna, init for opn fx type I/2",
  //   },
  //   {
  //     id: 2,
  //     first_name: "Aurora",
  //     last_name: "Krates",
  //     desc: "Acquired absence of uterus with remaining cervical stump",
  //   },
  //   {
  //     id: 3,
  //     first_name: "Mattie",
  //     last_name: "Drayn",
  //     desc: "Unsp fracture of upper end of unsp tibia, init for clos fx",
  //   },
  //   {
  //     id: 4,
  //     first_name: "Danny",
  //     last_name: "Maxwell",
  //     desc: "Unsp superficial injury of left ring finger, subs encntr",
  //   },
  //   {
  //     id: 5,
  //     first_name: "Sheba",
  //     last_name: "Cregin",
  //     desc: "Doubling of vagina, unspecified",
  //   },
  //   {
  //     id: 6,
  //     first_name: "Sharl",
  //     last_name: "Chesnay",
  //     desc: "Chondrolysis, left hip",
  //   },
  //   {
  //     id: 7,
  //     first_name: "Corbett",
  //     last_name: "Gery",
  //     desc: "Poisoning by oth general anesthetics, accidental, init",
  //   },
  //   {
  //     id: 8,
  //     first_name: "Zola",
  //     last_name: "Masham",
  //     desc: "Flail joint, hip",
  //   },
  //   {
  //     id: 9,
  //     first_name: "Raul",
  //     last_name: "Frounks",
  //     desc: "Oth fracture of shaft of unsp ulna, init for opn fx type I/2",
  //   },
  //   {
  //     id: 10,
  //     first_name: "Kip",
  //     last_name: "Gow",
  //     desc: "Bitten by dolphin, sequela",
  //   },
  // ];
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    db.collection("notifications")?.onSnapshot((snapshot) => {
      setNotifications(snapshot?.docs?.map((doc) => doc?.data()));
    });
    console.log(notifications);
  }, [notifications]);


  return (
    <Box>
      <Container>
        <Header>
          <Title>Hostel Notifications</Title>
          <BiBell />
        </Header>
        {notifications.map((notification) => {
          return (
            <Content>
              <AiOutlineInfoCircle />
              <Text>{notification.desc}</Text>
            </Content>
          );
        })}
      </Container>
      {/* <Container>
        <Header>
          <Title>Mess Instructions</Title> 
          <BiBell />
        </Header>
        {notifications.map((notification) => {
          return (
            <Content>
              <AiOutlineInfoCircle/>
              <Text>{notification.desc}</Text>
            </Content>
          );
        })}
      </Container> */}
    </Box>
  );
};

export default Notifications;
