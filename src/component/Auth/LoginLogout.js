import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import jwtDecode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { UserTokenState, MemberIdState } from "../../store/atom";
import styled from "styled-components";
import LoginImg from "../../img/Login.png";
import axios from "axios";

const StyledButton = styled.div`
  padding: 0px;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 40px;
  border: none;
  background: url(${LoginImg}) no-repeat;
  background-size: contain;
  width: 130px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LoginJoinButton() {
  const setUserToken = useSetRecoilState(UserTokenState);
  const setMemberId = useSetRecoilState(MemberIdState);
  const navigate = useNavigate();
  const handleSuccess = (res) => {
    const decodedToken = jwtDecode(res.credential);
    const userEmailDomain = decodedToken.email.split("@")[1];

    if (userEmailDomain !== "handong.ac.kr") {
      alert("handong.ac.kr 도메인으로만 로그인이 허용됩니다");
      return;
    }
    setUserToken(res.credential);
    // 첫 로그인 시 프로필 설정 이동 ||
    axios
      .post(`${process.env.REACT_APP_HOST_URL}/member`, {
        name: decodedToken.name,
        email: decodedToken.email,
        picture: decodedToken.picture,
      })
      .then(function (response) {
        // ToDo: 백엔드 t/f에 따라 이동 경로 변경해주기
        setMemberId(response.data.memberId);
        if (response.data.registered)
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
