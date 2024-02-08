import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import jwtDecode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { IsLoginState } from "../../store/atom";

export default function GoogleButton() {
  const setLogin = useSetRecoilState(IsLoginState);
  const navigate = useNavigate();
  const handleSuccess = (res) => {
    const decodedToken = jwtDecode(res.credential);
    const userEmailDomain = decodedToken.email.split("@")[1];

    if (userEmailDomain !== "handong.ac.kr") {
      alert("handong.ac.kr 도메인으로만 로그인이 허용됩니다");
      return;
    }
    console.log(decodedToken);
    setLogin(true);
    navigate("/GloBuddy");
  };

  const handleFailure = (err) => {
    console.log(err);
  };

  return (
    <>
      <GoogleLogin onSuccess={handleSuccess} onFailure={handleFailure} />
    </>
  );
}
