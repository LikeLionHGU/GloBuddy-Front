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

import {
  All,
  Banner,
  CC,
  CN,
  CT,
  Candy,
  Circle,
  Right,
  EC,
  EN,
  ET,
  Earth,
  Header,
  MS,
  Scroll,
  TitleComp,
  Left,
  SN,
  ST,
  SC,
  Green,
  Grid,
  Title,
  Three,
  Tree,
  To,
  Content,
  First,
  Text,
  Second,
  Footer,
  Person,
  PC,
  PW,
  PWF,
  PWS,
  NC,
  Note,
  NW,
  NWF,
  NWS,
  Out,
  OC,
  OW,
  OCF,
  OCS,
  Final,
  Flog,
  FF,
  FFF,
  FFS,
  FS,
  FSF,
  FSS,
  FT,
  Fall,
} from "../../styles/StyledComponents";
import GoogleLoginButton from "./LoginComponent";

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
  const style = {
    backgroundColor: "red",
    border: "1px solid black",
    width: "100%",
    height: "1000px",
  };

  return (
    <>
      <All>
        <Header>
          <>
            <img
              src={LogoImg}
              alt="로고"
              style={{
                width: "262px",
                height: "131.92px",
              }}
            />
            <h1
              style={{
                fontSize: "20px",
                fontFamily: "Arial",
                textAlign: "center",
              }}
            >
              Login/Join
            </h1>
          </>
        </Header>
        <TitleComp>
          <p
            style={{
              fontSize: "70px",
              fontFamily: "Arial",
              textAlign: "center",
            }}
          >
            Enhancing Your Global!
          </p>
          <p
            style={{
              fontSize: "20px",
              fontFamily: "Arial",
              textAlign: "center",
            }}
          >
            Domestic/International Buddy Matching Website.
          </p>
        </TitleComp>

        <Banner>
          <GoogleLoginButton />
          <img
            src={MainImg}
            alt="메인 그림"
            style={{
              width: "833px",
              height: "665.33px",
            }}
          />
        </Banner>
        <Scroll>
          <img
            src={ScrollImg}
            alt="버튼"
            style={{
              width: "34.85px",
              height: "50px",
            }}
          />
        </Scroll>
        <Content>
          <Right>
            <Earth>
              <img
                src={설명1Img}
                alt="버튼"
                style={{
                  width: "900px",
                  height: "500px",
                }}
              />
            </Earth>
            <Candy>
              <img
                src={설명2Img}
                alt="버튼"
                style={{
                  width: "900px",
                  height: "500px",
                }}
              />
            </Candy>
          </Right>
          <Left>
            <img
              src={설명3Img}
              alt="버튼"
              style={{
                width: "900px",
                height: "500px",
              }}
            />
          </Left>
        </Content>

        <Grid>
          <div
            style={{
              width: "100%",
              height: "900px",
              backgroundColor: "#FF9F31",
              opacity: 0.26,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Title>
              <h1
                style={{
                  fontSize: "2.5em",
                  color: "rgba(0, 0, 0, 1)",
                }}
              >
                How?
              </h1>
            </Title>
            <Final>
              <Person>
                <img
                  src={첫단계Img}
                  alt="버튼"
                  style={{
                    width: "340px",
                    height: "420px",
                    zIndex: 2,
                  }}
                />
              </Person>
              <Note>
                <img
                  src={두번째단계Img}
                  alt="버튼"
                  style={{
                    width: "340px",
                    height: "420px",
                    zIndex: 2,
                  }}
                />
              </Note>
              <Out>
                <img
                  src={세번째단계Img}
                  alt="버튼"
                  style={{
                    width: "340px",
                    height: "420px",
                    zIndex: 2,
                  }}
                />
              </Out>
            </Final>
          </div>
        </Grid>
        <Footer>
          <div
            style={{
              width: "100%",
              height: "220px",
              backgroundColor: "#000000",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Fall>
              <Flog>
                <img
                  src={LogoWhiteImg}
                  alt="로고"
                  style={{
                    width: "200px",
                    height: "113.92px",

                    zIndex: 2,
                  }}
                />
              </Flog>
              <FF>
                <FFF>
                  <p
                    style={{
                      fontSize: "1.0em",
                      color: "#FFFFFF",

                      zIndex: 2,
                    }}
                  >
                    (주)멋쟁이사자처럼 | 한동대학교
                  </p>
                </FFF>
                <FFS>
                  <img
                    src={LikelionImg}
                    alt="로고"
                    style={{
                      width: "20px",
                      height: "15px",

                      zIndex: 2,
                    }}
                    onClick={handleClicks}
                  />
                  <img
                    src={HGULogoImg}
                    alt="로고"
                    style={{
                      width: "26px",
                      height: "26px",

                      zIndex: 2,
                    }}
                    onClick={handleClick}
                  />
                </FFS>
              </FF>
              <FS>
                <FSF>
                  <p
                    style={{
                      fontSize: "1.0em",
                      color: "#FFFFFF",
                      zIndex: 2,
                    }}
                  >
                    GloB SNS | 소개 | FAQ | Contact
                  </p>
                </FSF>
                <FSS>
                  <img
                    src={InstaImg}
                    alt="로고"
                    style={{
                      width: "23px",
                      height: "23px",

                      zIndex: 2,
                    }}
                    onClick={handleClickse}
                  />
                  <img
                    src={KakaoImg}
                    alt="로고"
                    style={{
                      width: "23px",
                      height: "23px",
                      zIndex: 2,
                    }}
                  />
                </FSS>
              </FS>
              <FT>
                <p
                  style={{
                    fontSize: "1.0em",
                    color: "#FFFFFF",

                    zIndex: 2,
                  }}
                >
                  jaies2316@gmail.com
                </p>
              </FT>
            </Fall>
          </div>
        </Footer>
      </All>
    </>
  );
}
