import { useState } from "react";
import { UserTokenState } from "../store/atom";
import jwtDecode from "jwt-decode";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import ProfileComponent1 from "../component/Profile/ProfileComponent1";
import ProfileComponent3 from "../component/Profile/ProfileComponent3";

function Profile() {
  const userToken = useRecoilValue(UserTokenState);
  const decodedToken = jwtDecode(userToken);
  const [selectedUserInfo, setSelectedUserInfo] = useState({
    name: decodedToken.name,
    type: "",
    gender: "",
    propensity: "",
    picture: decodedToken.picture,
  });
  const [pageNumber, setPageNumber] = useState(1);
  const handleNext = (userInfo) => {
    console.log(userInfo);
    setSelectedUserInfo((prevInfo) => ({ ...prevInfo, ...userInfo }));
    setPageNumber((prevNumber) => prevNumber + 1);
  };

  const navigate = useNavigate();
  let currentComponent;
  switch (pageNumber) {
    case 1:
      currentComponent = (
        <ProfileComponent1 userInfo={selectedUserInfo} onNext={handleNext} />
      );
      break;
    case 2:
      currentComponent = (
        <ProfileComponent3 userInfo={selectedUserInfo} onNext={handleNext} />
      );
      break;
    case 3:
      // Todo: 여기서 api post 호출 '유저 정보 저장'
      navigate("/GloBuddy", { state: selectedUserInfo });
      break;
    default:
      console.log("default error");
      break;
  }

  return <>{currentComponent}</>;
}

export default Profile;
