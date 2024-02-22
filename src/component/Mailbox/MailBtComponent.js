import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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

function MailBtComponent() {
  const navigate = useNavigate();
  const handleNavigateAlarm = () => {
    navigate("/GloBuddy/Alarm");
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
