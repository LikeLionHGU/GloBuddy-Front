import { useState } from "react";
import { useRecoilValue } from "recoil";
import { UserTokenState, MemberIdState } from "../store/atom";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import ProfileComponent1 from "../component/Profile/ProfileComponent1";
import ProfileComponent3 from "../component/Profile/ProfileComponent3";
import axios from "axios";

function Profile() {
  const userToken = useRecoilValue(UserTokenState);
  const memberId = useRecoilValue(MemberIdState);
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
      axios
        .post(`${process.env.REACT_APP_HOST_URL}/memberDetail`, {
          memberId: memberId,
          gender: selectedUserInfo.gender,
          nation: selectedUserInfo.type,
          mbti: selectedUserInfo.propensity,
        })
        .then(function (response) {
          console.log("response", response);
        })
        .catch(function (error) {
          console.log(error);
        });

      navigate("/GloBuddy");
      break;
    default:
      console.log("default error");
      break;
  }

  return <>{currentComponent}</>;
}

export default Profile;
