import React from "react";
import MainImg from "../../img/main.png";
import ScrollImg from "../../img/Scroll.png";
import Chat1Img from "../../img/Chat1.png";
import Connection1Img from "../../img/Connection1.png";
import GroupImg from "../../img/Group.png";
import Worldwide1Img from "../../img/Worldwide1.png";
import LogoWhiteImg from "../../img/LogoWhite.png";
import LogoImg from "../../img/Logo.png";
import LikelionImg from "../../img/Likelion.png";
import HGULogoImg from "../../img/HGULogo.png";
import KakaoImg from "../../img/Kakao.png";
import InstaImg from "../../img/Insta.png";
import UserIconImg from "../../img/UserIcon.png";
import VectorImg from "../../img/Vector.png";
import StorageImg from "../../img/Storage.png";
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
              <EN>
                <ET>
                  <h1
                    style={{
                      fontSize: "2.5em",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {" "}
                    Are you global?
                  </h1>
                </ET>
                <EC>
                  <p
                    style={{
                      fontSize: "1.15em",
                      textAlign: "left",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    Handong Global University, we attend a global university.
                    <br></br> The union between domestic and international
                    students
                    <br></br> generates special synergy.<br></br>
                    However, the gap between them tends to widen over time.{" "}
                    <br></br>How many foreign friends do you have around you?
                  </p>
                </EC>
              </EN>
              <Circle>
                <img
                  src={Worldwide1Img}
                  alt="버튼"
                  style={{
                    width: "179.18px",
                    height: "171px",
                  }}
                />
              </Circle>
            </Earth>

            <Candy>
              <CN>
                <CT>
                  <h1
                    style={{
                      fontSize: "2.5em",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {" "}
                    Why should you choose GloB?
                  </h1>
                </CT>
                <CC>
                  <p
                    style={{
                      fontSize: "1.15em",
                      textAlign: "left",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    On the foundation of the value of global connectivity,{" "}
                    <br></br>
                    we can share information and culture beyond language
                    <br></br> barriers.GloB is the optimal solution. Meet your
                    ideal
                    <br></br> Global Buddy through our service.
                  </p>
                </CC>
              </CN>
              <MS>
                <img
                  src={Connection1Img}
                  alt="버튼"
                  style={{
                    width: "179.18px",
                    height: "171px",
                  }}
                />
              </MS>
            </Candy>
          </Right>
          <Left>
            <SN>
              <ST>
                <h1
                  style={{
                    fontSize: "2.5em",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  {" "}
                  We don't have a pretext.
                </h1>
              </ST>
              <SC>
                <p
                  style={{
                    fontSize: "1.15em",
                    textAlign: "left",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  We find ourselves in many environments conducive to <br></br>
                  interaction such as international exchange events, English
                  <br></br> classes, and more. However, that's not always
                  enough. Our <br></br>
                  service provides a platform for sharing your ‘Needs’ and
                  <br></br> initiating communication!
                </p>
              </SC>
            </SN>
            <Green>
              <img
                src={Chat1Img}
                alt="버튼"
                style={{
                  width: "181.17px",
                  height: "171px",
                }}
              />
            </Green>
          </Left>
        </Content>
        <div
          style={{
            width: "100%",
            height: "960px",
            backgroundColor: "#FF9F31",
            opacity: 0.26,
            position: "absolute",
            marginTop: "1930px",
            zIndex: 1,
          }}
        ></div>

        <Grid>
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
          <To>
            <Three>
              <img
                src={GroupImg}
                alt="버튼"
                style={{
                  width: "300px",
                  height: "300px",
                  zIndex: 2,
                }}
              />
              <img
                src={GroupImg}
                alt="버튼"
                style={{
                  width: "300px",
                  height: "300px",
                  zIndex: 2,
                }}
              />
              <img
                src={GroupImg}
                alt="버튼"
                style={{
                  width: "300px",
                  height: "300px",
                  zIndex: 2,
                }}
              />
            </Three>
          </To>
        </Grid>
      </All>
    </>
  );
}
