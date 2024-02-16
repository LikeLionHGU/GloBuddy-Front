import React from "react";
import MainImg from "../../img/main.png";
import FindBuddyBTImg from "../../img/FindBuddyBT.png";
import ScrollImg from "../../img/Scroll.png";
import Chat1Img from "../../img/Chat1.png";
import Connection1Img from "../../img/Connection1.png";
import GroupImg from "../../img/Group.png";
import Worldwide1Img from "../../img/Worldwide1.png";
import LogoImg from "../../img/Logo.png";
import LogoWhiteImg from "../../img/LogoWhite.png";
import LikelionImg from "../../img/Likelion.png";
import HGULogoImg from "../../img/HGULogo.png";
import KakaoImg from "../../img/Kakao.png";
import InstaImg from "../../img/Insta.png";

export default function AuthStyleComponent() {
  return (
    <>
      <p
        style={{
          fontSize: "70px",
          fontFamily: "Arial",
          textAlign: "center",
          position: "absolute",
          top: "50px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Enhancing Your Global!
      </p>
      <p
        style={{
          fontSize: "20px",
          fontFamily: "Arial",
          textAlign: "center",
          position: "absolute",
          top: "250px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Domestic/International Buddy Matching Website.
      </p>
      <h1
        style={{
          fontSize: "20px",
          fontFamily: "Arial",
          textAlign: "center",
          position: "absolute",
          top: "10px",
          right: "30px",
          transform: "translateX(-50%)",
        }}
      >
        Login/Join
      </h1>
      <img
        src={LogoImg}
        alt="로고"
        style={{
          width: "262px",
          height: "131.92px",
          position: "absolute",
          top: "8px",
          left: "100.4px",
        }}
      />
      <img
        src={MainImg}
        alt="메인 그림"
        style={{
          width: "833px",
          height: "665.33px",
          position: "absolute",
          top: "338px",
          right: "384px",
        }}
      />
      <img
        src={FindBuddyBTImg}
        alt="버튼"
        style={{
          width: "438px",
          height: "120px",
          position: "absolute",
          top: "610.67px",
          left: "195px",
        }}
      />
      <img
        src={ScrollImg}
        alt="버튼"
        style={{
          width: "34.85px",
          height: "50px",
          position: "absolute",
          top: "1026px",
          left: "50%",
        }}
      />
      <div
        style={{
          width: "726.68px",
          height: "380px",
          backgroundColor: "rgba(255, 166, 64, 0.4)",
          filter: "blur(20px)",
          position: "absolute",
          marginTop: "1900px",
          left: "998px",
          Index: 1,
        }}
      ></div>
      <div>
        <h1
          style={{
            fontSize: "2.5em",
            color: "rgba(0, 0, 0, 1)",
            top: "1310px",
            left: "1030px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          {" "}
          Are you global?
        </h1>
        <p
          style={{
            fontSize: "1.15em",
            textAlign: "left",
            color: "rgba(0, 0, 0, 1)",
            top: "1390px",
            left: "1030px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          Handong Global University, we attend a global university.<br></br> The
          union between domestic and international students<br></br> generates
          special synergy.<br></br>
          However, the gap between them tends to widen over time. <br></br>How
          many foreign friends do you have around you?
        </p>
        <img
          src={Worldwide1Img}
          alt="버튼"
          style={{
            width: "179.18px",
            height: "171px",
            position: "absolute",
            top: "1360px",
            left: "1510px",
          }}
        />
      </div>
      <div
        style={{
          width: "726.68px",
          height: "380px",
          backgroundColor: "#FAC0CE",
          opacity: 0.4,
          filter: "blur(20px)",
          position: "absolute",
          marginTop: "2400px",
          left: "195px",
        }}
      ></div>
      <div>
        <h1
          style={{
            fontSize: "2.5em",
            color: "rgba(0, 0, 0, 1)",
            top: "1560px",
            left: "400px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          {" "}
          We don't have a pretext.
        </h1>
        <p
          style={{
            fontSize: "1.15em",
            textAlign: "left",
            color: "rgba(0, 0, 0, 1)",
            top: "1640px",
            left: "400px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          We find ourselves in many environments conducive to <br></br>
          interaction such as international exchange events, English<br></br>{" "}
          classes, and more. However, that's not always enough. Our <br></br>
          service provides a platform for sharing your ‘Needs’ and<br></br>{" "}
          initiating communication!
        </p>
        <img
          src={Chat1Img}
          alt="버튼"
          style={{
            width: "181.17px",
            height: "171px",
            position: "absolute",
            top: "1575px",
            left: "210px",
          }}
        />
      </div>

      <div
        style={{
          width: "726.68px",
          height: "380px",
          backgroundColor: "#FF7648",
          opacity: 0.4,
          filter: "blur(20px)",
          position: "absolute",
          marginTop: "3050px",
          left: "998px",
        }}
      ></div>
      <div>
        <h1
          style={{
            fontSize: "2.5em",
            color: "rgba(0, 0, 0, 1)",
            top: "1890px",
            left: "1030px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          {" "}
          Why should you choose GloB?
        </h1>
        <p
          style={{
            fontSize: "1.15em",
            textAlign: "left",
            color: "rgba(0, 0, 0, 1)",
            top: "1970px",
            left: "1030px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          On the foundation of the value of global connectivity, <br></br>we can
          share information and culture beyond language<br></br> barriers.GloB
          is the optimal solution. Meet your ideal<br></br> Global Buddy through
          our service.
        </p>
        <img
          src={Connection1Img}
          alt="버튼"
          style={{
            width: "179.18px",
            height: "171px",
            position: "absolute",
            top: "1940px",
            left: "1510px",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "960px",
          backgroundColor: "#FF9F31",
          opacity: 0.26,
          position: "absolute",
          marginTop: "5000px",
          zIndex: 1,
        }}
      ></div>
      <img
        src={GroupImg}
        alt="버튼"
        style={{
          width: "300px",
          height: "300px",
          position: "absolute",
          top: "2800px",
          left: "300px",
          zIndex: 2,
        }}
      />
      {/* 유저아이콘 삽입 */}
      <img
        src={GroupImg}
        alt="버튼"
        style={{
          width: "300px",
          height: "300px",
          position: "absolute",
          top: "2800px",
          left: "800px",
          zIndex: 2,
        }}
      />
      {/* 벡터 아이콘 삽입 */}
      <img
        src={GroupImg}
        alt="버튼"
        style={{
          width: "300px",
          height: "300px",
          position: "absolute",
          top: "2800px",
          left: "1300px",
          zIndex: 2,
        }}
      />
      {/* 저장아이콘 삽입 */}
      <div>
        <p
          style={{
            fontSize: "1.8em",
            color: "rgba(0, 0, 0, 1)",
            top: "3070px",
            left: "360px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          {" "}
          Create a profile
        </p>
        <p
          style={{
            fontSize: "1.18em",
            color: "rgba(0, 0, 0, 1)",
            top: "3130px",
            left: "340px",
            position: "absolute",
            textAlign: "center",
            zIndex: 2,
          }}
        >
          {" "}
          Easily sign up and create your <br></br>profile in no time.
        </p>
      </div>
      <div>
        <p
          style={{
            fontSize: "1.8em",
            color: "rgba(0, 0, 0, 1)",
            top: "3070px",
            left: "829px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          {" "}
          Write & Explore posts
        </p>
        <p
          style={{
            fontSize: "1.18em",
            color: "rgba(0, 0, 0, 1)",
            top: "3130px",
            left: "840px",
            position: "absolute",
            textAlign: "center",
            zIndex: 2,
          }}
        >
          {" "}
          Your introduction will be <br></br>uploaded to the buddy posts.
        </p>
        <h1
          style={{
            fontSize: "1.8em",
            color: "rgba(0, 0, 0, 1)",
            top: "2620px",
            left: "915px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          How?
        </h1>
      </div>
      <div>
        <p
          style={{
            fontSize: "1.8em",
            color: "rgba(0, 0, 0, 1)",
            top: "3070px",
            right: "400px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          Apply & Connect
        </p>
        <p
          style={{
            fontSize: "1.18em",
            color: "rgba(0, 0, 0, 1)",
            top: "3130px",
            right: "400px",
            position: "absolute",
            textAlign: "center",
            zIndex: 2,
          }}
        >
          {" "}
          Request the buddies you <br></br>want to join!
        </p>
      </div>
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "#1C1C1C",
          position: "absolute",
          marginTop: "6160px",
          zIndex: 1,
        }}
      >
        <img
          src={LogoWhiteImg}
          alt="로고"
          style={{
            width: "200px",
            height: "113.92px",
            position: "absolute",
            top: "40px",
            left: "110px",
            zIndex: 2,
          }}
        />
        <p
          style={{
            fontSize: "1.0em",
            color: "#FFFFFF",
            top: "50px",
            left: "350px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          (주)멋쟁이사자처럼 | 한동대학교
        </p>
        <img
          src={LikelionImg}
          alt="로고"
          style={{
            width: "20px",
            height: "15px",
            position: "absolute",
            top: "105px",
            left: "360px",
            zIndex: 2,
          }}
        />
        <img
          src={HGULogoImg}
          alt="로고"
          style={{
            width: "26px",
            height: "26px",
            position: "absolute",
            top: "99px",
            left: "390px",
            zIndex: 2,
          }}
        />
        <p
          style={{
            fontSize: "1.0em",
            color: "#FFFFFF",
            top: "50px",
            left: "650px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          GloB SNS | 소개 | FAQ | Contact
        </p>
        <img
          src={InstaImg}
          alt="로고"
          style={{
            width: "26px",
            height: "26px",
            position: "absolute",
            top: "99px",
            left: "660px",
            zIndex: 2,
          }}
        />
        <img
          src={KakaoImg}
          alt="로고"
          style={{
            width: "26px",
            height: "26px",
            position: "absolute",
            top: "99px",
            left: "697px",
            zIndex: 2,
          }}
        />

        <p
          style={{
            fontSize: "1.0em",
            color: "#FFFFFF",
            top: "50px",
            left: "950px",
            position: "absolute",
            zIndex: 2,
          }}
        >
          jaies2316@gmail.com
        </p>
      </div>
    </>
  );
}
