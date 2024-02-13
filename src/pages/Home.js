import { useLocation } from "react-router";
import HomeComponent from "../component/Home/HomeComponent";
import ProfileBtComponent from "../component/Home/ProfileBtComponent";
import MailBtComponent from "../component/Mailbox/MailBtComponent";
import { Horizontal } from "../styles/StyledComponents";

function Home() {
  const { state } = useLocation(); // navigate state
  return (
    <>
      <Horizontal>
        <ProfileBtComponent />
        <MailBtComponent />
      </Horizontal>
      <HomeComponent userInfo={state} />
    </>
  );
}

export default Home;
