import React, { useState } from "react";
import { useLocation } from "react-router";
import MailAlarmInboxComponent from "../component/Mailbox/MailAlarmInboxComponent";
import MailAlarmSentItemsComponent from "../component/Mailbox/MailAlarmSentItemsComponent";

function Alarm() {
  const { state } = useLocation();
  const [show, setShow] = useState(true);

  const handleShowInbox = () => {
    setShow(true); // Inbox 보이기
  };

  const handleShowSentItems = () => {
    setShow(false); // Sent Items 보이기
  };
  return (
    <>
      <button onClick={handleShowInbox}>Show Inbox</button>
      <button onClick={handleShowSentItems}>Show Sent Items</button>
      {show ? (
        <MailAlarmInboxComponent chatData={state} />
      ) : (
        <MailAlarmSentItemsComponent chatData={state} />
      )}
    </>
  );
}

export default Alarm;
