import { useLocation } from "react-router";
import HomeComponent from "../component/Home/HomeComponent";

function Home() {
  const { state } = useLocation(); // navigate state
  return (
    <>
      <HomeComponent userInfo={state} />
    </>
  );
}

export default Home;
