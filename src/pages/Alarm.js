import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import MailAlarmInboxComponent from "../component/Mailbox/MailAlarmInboxComponent";
import MailAlarmSentItemsComponent from "../component/Mailbox/MailAlarmSentItemsComponent";
import { Vertical, Horizontal } from "../styles/StyledComponents";

const BT = styled.button`
  border: 1px solid lightgray;
  background: lightgray;
  cursor: pointer;
  width: 150px;
  height: 50px;
  margin: 20px;
`;

function Alarm() {
  const { state } = useLocation();
  const [show, setShow] = useState(true);

  const handleShowInbox = () => {
    setShow(true); // Inbox 보이기
  };

  const handleShowSentItems = () => {
    setShow(false); // Sent Items 보이기
  };
  const isEmptyInbox = state.every((data) => data.inbox === 0);

  return (
    <Horizontal>
      <Vertical>
        <BT onClick={handleShowInbox}>Show Inbox</BT>
        <BT onClick={handleShowSentItems}>Show Sent Items</BT>
      </Vertical>
      <Vertical>
        {isEmptyInbox ? (
          <div>
            Your Letterbox is empty! Meet more global buddies from the buddy
            request !
          </div>
        ) : show ? (
          <MailAlarmInboxComponent chatData={state} />
        ) : (
          <MailAlarmSentItemsComponent chatData={state} />
        )}
      </Vertical>
    </Horizontal>
  );
}

export default Alarm;
