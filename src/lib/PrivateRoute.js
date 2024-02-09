import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserTokenState } from "../store/atom";
import { useRecoilValue } from "recoil";

const PrivateRoute = () => {
  const userToken = useRecoilValue(UserTokenState);

  // if (!userToken) {
  //   alert("handong.ac.kr 도메인으로 로그인해주세요!");
  // }

  return userToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
