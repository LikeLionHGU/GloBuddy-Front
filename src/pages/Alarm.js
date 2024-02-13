import { useLocation } from "react-router";
import MailAlarmComponent from "../component/Mailbox/MailAlarmComponent";

function Alarm() {
  const { state } = useLocation();
  return (
    <>
      <MailAlarmComponent chatData={state} />
    </>
  );
}

export default Alarm;
