import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import jwtDecode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { UserTokenState } from "../../store/atom";
import styled from "styled-components";
import FindBuddyBTImg from "../../img/FindBuddyBT.png";
import axios from "axios";

const StyledButton = styled.button`
  padding: 0px;
  border: none;
  background: url(${FindBuddyBTImg}) no-repeat;
  width: 500px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function GoogleButton() {
  const setUserToken = useSetRecoilState(UserTokenState);
  const navigate = useNavigate();
  const handleSuccess = (res) => {
    const decodedToken = jwtDecode(res.credential);
    const userEmailDomain = decodedToken.email.split("@")[1];

    if (userEmailDomain !== "handong.ac.kr") {
      alert("handong.ac.kr 도메인으로만 로그인이 허용됩니다");
      return;
    }
    console.log(decodedToken);
    setUserToken(res.credential);
    // Todo: 여기서 api post 호출 '유저 저장'
    // 첫 로그인 시 프로필 설정 이동 ||
    axios
      .post("http://localhost:8080/member", {
        name: decodedToken.name,
        email: decodedToken.email,
        picture: decodedToken.picture,
      })
      .then(function (response) {
        // response Action
        if (response)
          navigate("/GloBuddy"); // 반환 값이 true면 등록되어 있는 사람
        else navigate("/GloBuddy/Profile"); // false면 처음 가입한 사람
      })
      .catch(function (error) {
        console.log(error);
      });

    // 첫 로그인 아닌 경우 메인 화면으로 이동
    //
  };

  const handleFailure = (err) => {
    console.log(err);
  };

  return (
    <StyledButton>
      <div style={{ opacity: 0 }}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </StyledButton>
  );
}
