import React, { useEffect, useState } from "react";

import {
  Box,
  Container,
  Header,
  Content,
  Title,
  Text,
} from "./styles/complaintcard";
import { BiBell } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import db from "../../database/firebase";
const ComplaintCard = ({ complaint }) => {
  return (
    <Box>
      <Container>
        <Header>
          <Title><b>Hostel</b> {complaint.hostelName}</Title>
        </Header>
        <Content>
          <Text><b>Category</b> {complaint.issuecategory}</Text>
        </Content>
        <Content>
          <Text>
            <b>Filed by </b>{complaint.personName} {complaint.userMail}
          </Text>
        </Content>
        <Content>
          <Text><b>Description </b>- {complaint.description}</Text>
        </Content>
        <Content>
          {!complaint.status ? (
            <Text><b>Status </b>"pending"</Text>
          ) : (
            <Text><b>Status </b> {complaint.status}</Text>
          )}
        </Content>
        <Content>
          <Text><b>Escalation Level</b> {complaint.escalation}</Text>
        </Content>
      </Container>
    </Box>
  );
};

export default ComplaintCard;
