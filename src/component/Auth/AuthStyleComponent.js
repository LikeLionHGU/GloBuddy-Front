import React from "react";
import MainImg from "../../img/main.png";
import ScrollImg from "../../img/Scroll.png";
import 설명1Img from "../../img/설명1.png";
import 설명2Img from "../../img/설명2.png";
import 설명3Img from "../../img/설명3.png";
import LogoWhiteImg from "../../img/LogoWhite.png";
import LogoImg from "../../img/Logo.png";
import LikelionImg from "../../img/Likelion.png";
import HGULogoImg from "../../img/HGULogo.png";
import KakaoImg from "../../img/Kakao.png";
import InstaImg from "../../img/Insta.png";
import 첫단계Img from "../../img/첫단계.png";
import 두번째단계Img from "../../img/두번째단계.png";
import 세번째단계Img from "../../img/세번째단계.png";
import styled from "styled-components";

import {
  Banner,
  Scroll,
  Vertical,
  Horizontal,
} from "../../styles/StyledComponents";
import GoogleLoginButton from "./LoginComponent";
import LoginJoinButton from "./LoginLogout";

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const BoxImg = styled.img`
  width: 560px;
  height: 300px;
`;
const FirstBoxImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 350px;
  margin-top: 140px;
`;
const SecondBoxImg = styled.div`
  width: 100%;
  display: flex;
  margin-left: 350px;
  margin-top: -150px;
`;
const ThirdBoxImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: -150px;
  margin-right: 350px;
  margin-bottom: 180px;
`;
const ThirdDiv = styled.div`
  width: 100%;
  height: 720px;
  background-color: rgba(255, 159, 49, 0.26);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HowText = styled.p`
  font-size: 33px;
  font-family: Title1;
`;
const HowImg = styled.img`
  width: 225px;
  height: 294px;
  margin-left: 100px;
  margin-right: 100px;
`;
const Footer = styled.div`
  height: 150px;
  background-color: #000000;
  width: 100%;
  display: flex;
  align-items: center;
`;
const FooterText = styled.p`
  font-size: 7.5px;
  color: #ffffff;
  margin-left: 50px;
`;
const FooterMailText = styled.p`
  font-size: 7.5px;
  color: #ffffff;
  margin-top: -8px;
  margin-left: 50px;
`;
const FooterLikeImg = styled.img`
  width: 16px;
  height: 8px;
  margin-right: 7px;
`;
const FooterImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 7px;
`;
export default function AuthStyleComponent() {
  const handleClick = () => {
    window.location.href = "https://www.handong.edu/";
  };

  const handleClicks = () => {
    window.location.href = "https://hgulikelion.web.app/";
  };
  const handleClickse = () => {
    window.location.href = "https://www.instagram.com/glob_webservice/";
  };

  return (
    <>
      <Header>
        <img
          src={LogoImg}
          alt="로고"
          style={{
            marginLeft: "80px",
            width: "180px",
            height: "90px",
          }}
        />

        <LoginJoinButton />
      </Header>
      <Vertical>
        <p
          style={{
            fontSize: "52px",
            fontFamily: "Slogan",
            textAlign: "center",
            margin: 0,
            marginBottom: "10px",
          }}
        >
          Enhancing Your Global!
        </p>
        <p
          style={{
            fontSize: "12px",
            fontFamily: "Body2",
            textAlign: "center",
            margin: 0,
          }}
        >
          Domestic/International Buddy Matching Website.
        </p>
      </Vertical>

      <Banner>
        <GoogleLoginButton />
        <img
          src={MainImg}
          alt="메인 그림"
          style={{
            marginLeft: "100px",
            width: "668px",
            height: "525px",
          }}
        />
      </Banner>
      <Scroll>
        <img
          src={ScrollImg}
          alt="버튼"
          style={{
            marginTop: "20px",
            width: "26px",
            height: "37px",
          }}
        />
      </Scroll>

      <FirstBoxImg>
        <BoxImg src={설명1Img} alt="버튼" />
      </FirstBoxImg>
      <SecondBoxImg>
        <BoxImg src={설명2Img} alt="버튼" />
      </SecondBoxImg>
      <ThirdBoxImg>
        <BoxImg src={설명3Img} alt="버튼" />
      </ThirdBoxImg>

      <ThirdDiv>
        <HowText>How?</HowText>
        <Horizontal>
          <HowImg src={첫단계Img} alt="버튼" />
          <HowImg src={두번째단계Img} alt="버튼" />
          <HowImg src={세번째단계Img} alt="버튼" />
        </Horizontal>
      </ThirdDiv>

      <Footer>
        <img
          src={LogoWhiteImg}
          alt="로고"
          style={{
            width: "105px",
            height: "50px",
            marginLeft: "132px",
            marginRight: "40px",
          }}
        />
        <Vertical>
          <FooterText>(주)멋쟁이사자처럼 | 한동대학교</FooterText>
          <Horizontal>
            <FooterLikeImg
              src={LikelionImg}
              alt="로고"
              onClick={handleClicks}
            />
            <FooterImg src={HGULogoImg} alt="로고" onClick={handleClick} />
          </Horizontal>
        </Vertical>
        <Vertical>
          <FooterText>GloB SNS | 소개 | FAQ | Contact</FooterText>
          <Horizontal>
            <FooterImg src={InstaImg} alt="로고" onClick={handleClickse} />
            <FooterImg src={KakaoImg} alt="로고" />
          </Horizontal>
        </Vertical>
        <FooterMailText>jaies2316@gmail.com</FooterMailText>
      </Footer>
    </>
  );
}
