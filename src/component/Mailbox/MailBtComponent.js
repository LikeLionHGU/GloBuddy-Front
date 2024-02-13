import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosMail } from "react-icons/io";

const MailButton = styled.button`
  border: none;
  background: white;
  cursor: pointer;
`;

const chatData = [
  {
    name: "오세훈",
    type: "국내 더미",
    gender: "여자 더미",
    propensity: "차분함 더미",
    needs: "친구 더미",
    picture: "더미 사진 링크",
    text: "버디를 요청합니다. 이유는 재밌어보여서 입니다.",
    kakao: "https://github.com/LikeLionHGU/GloBuddy-Front/issues/11",
  },
  {
    name: "이한나",
    type: "국내 더미",
    gender: "여자 더미",
    propensity: "차분함 더미",
    needs: "친구 더미",
    picture: "더미 사진 링크",
    text: "버디를 요청합니다. 이유는 재밌어보여서 입니다.",
    kakao: "https://github.com/LikeLionHGU/GloBuddy-Front/issues/11",
  },
  {
    name: "정정재",
    type: "국내 더미",
    gender: "남자 더미",
    propensity: "차분함 더미",
    needs: "친구 더미",
    picture: "더미 사진 링크",
    text: "버디를 요청합니다. 이유는 재밌어보여서 입니다.",
    kakao: "https://github.com/LikeLionHGU/GloBuddy-Front/issues/11",
  },
  {
    name: "김민혁",
    type: "꺄호",
    gender: "여자 더미",
    propensity: "차분함 더미",
    needs: "친구 더미",
    picture: "더미 사진 링크",
    text: "버디를 요청합니다. 이유는 재밌어보여서 입니다.",
    kakao: "https://github.com/LikeLionHGU/GloBuddy-Front/issues/11",
  },
  {
    name: "조예환",
    type: "뭐",
    gender: "커피",
    propensity: "꺄호",
    needs: "친구 더미",
    picture: "더미 사진 링크",
    text: "버디를 요청합니다. 이유는 재밌어보여서 입니다.",
    kakao: "https://github.com/LikeLionHGU/GloBuddy-Front/issues/11",
  },
];

function MailBtComponent() {
  const navigate = useNavigate();
  const handleNavigateAlarm = () => {
    navigate("/GloBuddy/Alarm", { state: chatData });
  };
  return (
    <>
      <MailButton onClick={handleNavigateAlarm}>
        <IoIosMail size="30" />
      </MailButton>
    </>
  );
}

export default MailBtComponent;
