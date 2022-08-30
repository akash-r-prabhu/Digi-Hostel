import React, { useEffect, useState } from "react";

import {
  Box,
  Container,
  Header,
  Content,
  Title,
  Text,
} from "./styles/accordion";
import { BiBell } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import db from "../../database/firebase";
const Accordion = ({name, type}) => {

  if (type == "student") {
    return (
      <Box>
        <Container>
          <Header>
            <Title>Hey {name}</Title>
          </Header>
          <Content>
            <Text>Welcome to the student homepage</Text>
          </Content>
          <Content>
          <Text>
              Here you can lodge a complaint , check hostel notifications and
              chat with admin
            </Text>
          </Content>
        </Container>
      </Box>
    );
  } else {
    return (
      <Box>
        <Container>
          <Header>
            <Title>Hey {name}</Title>
          </Header>
          <Content>
            <Text>
              Here you can 1. Review complaints
              <br />
              2. Send Notifications
              <br />
              3. Chat with students
            </Text>
            <Text>
              {" "}
              Here you can lodge a complaint , check hostel notification and
              chat with admin
            </Text>
          </Content>
        </Container>
      </Box>
    );
  }
};

export default Accordion;
