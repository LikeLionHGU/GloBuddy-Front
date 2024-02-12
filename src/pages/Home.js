import { useLocation } from "react-router";
import HomeComponent from "../component/Home/HomeComponent";
import ProfileBtComponent from "../component/Home/ProfileBtComponent";

function Home() {
  const { state } = useLocation(); // navigate state
  return (
    <>
      <ProfileBtComponent />
      <HomeComponent userInfo={state} />
    </>
  );
}

export default Home;
