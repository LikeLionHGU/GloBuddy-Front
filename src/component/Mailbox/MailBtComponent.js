import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { MemberIdState } from "../../store/atom";
import axios from "axios";
import { Link } from "react-router-dom";
import SolarLetterImg from "../../img/SolarLetter.png";
import LogoImg from "../../img/Logo.png";

const MailButton = styled.button`
  border: none;
  background: white;
  cursor: pointer;
  width: 100%;
`;

// inbox : 0은 미확인 , 1은 수락, 2는 거절 (ifMatched)
// send : IfChecked | true는 확인 / false는 미확인
// inbox가 1,2이면서 send가 false일때만 응답 받은 편지함에 보이기
// TODO: chatData 넘기는 api 연결

function MailBtComponent() {
  const memberId = useRecoilValue(MemberIdState);
  const navigate = useNavigate();
  const handleNavigateAlarm = () => {
    axios
      .get(
        `${process.env.REACT_APP_HOST_URL}/matching/notification/receive/${memberId}`
      )
      .then((response) => {
        console.log("response", response.data.receiveMailResponseList);
        navigate("/GloBuddy/Alarm", {
          state: response.data.receiveMailResponseList,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <>
      <Link to="/Globuddy">
        <img
          src={LogoImg}
          alt="로고"
          style={{
            marginLeft: "78px",
            width: "150px",
            height: "72px",
          }}
        />
      </Link>
      <MailButton onClick={handleNavigateAlarm}>
        <img
          src={SolarLetterImg}
          alt="사용자버튼"
          style={{
            width: "52.5px",
            height: "48.12px",
            marginLeft: "auto",
            marginRight: "20px",
            display: "flex",
          }}
        />
      </MailButton>
    </>
  );
}

export default MailBtComponent;
