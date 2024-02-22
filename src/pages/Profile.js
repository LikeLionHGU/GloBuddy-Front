import { useState, useEffect } from "react";
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
  useEffect(() => {
    if (pageNumber === 3) {
      axios
        .post(`${process.env.REACT_APP_HOST_URL}/memberDetail`, {
          memberId: memberId,
          gender: selectedUserInfo.gender,
          nation: selectedUserInfo.type,
          mbti: selectedUserInfo.propensity,
        })
        .then(function (response) {
          console.log("response", response);
          navigate("/GloBuddy");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [
    pageNumber,
    memberId,
    navigate,
    selectedUserInfo.gender,
    selectedUserInfo.propensity,
    selectedUserInfo.type,
  ]); // 페이지 번호가 변경될 때마다 호출

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
      currentComponent = null;
      break;
    default:
      console.log("default error");
      break;
  }

  return <>{currentComponent}</>;
}

export default Profile;
