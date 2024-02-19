import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosMail } from "react-icons/io";
import axios from "axios";

const MailButton = styled.button`
  border: none;
  background: white;
  cursor: pointer;
`;

// inbox : 0은 미확인 , 1은 수락, 2는 거절 (ifMatched)
// send : IfChecked | true는 확인 / false는 미확인
// inbox가 1,2이면서 send가 false일때만 응답 받은 편지함에 보이기
// TODO: chatData 넘기는 api 연결
// const chatData = [
//   {
//     send: false, // 일단 보낸 편지함
//     inbox: 1,
//     name: "오세훈",
//     type: "국내 더미",
//     gender: "여자 더미",
//     propensity: "차분함 더미",
//     needs: "친구 더미",
//     picture: "더미 사진 링크",
//     text: "버디를 요청합니다. 이유는 재밌어보여서 입니다.",
//     kakao: "https://github.com/LikeLionHGU/GloBuddy-Front/issues/11",
//   },
//   {
//     send: true, // 일단 보낸 편지함
//     inbox: 2,
//     name: "이한나",
//     type: "국내 더미",
//     gender: "여자 더미",
//     propensity: "차분함 더미",
//     needs: "친구 더미",
//     picture: "더미 사진 링크",
//     text: "버디를 요청합니다. 이유는 재밌어보여서 입니다.",
//     kakao: "https://github.com/LikeLionHGU/GloBuddy-Front/issues/11",
//   },
//   {
//     send: true, // 일단 보낸 편지함
//     inbox: 1,
//     name: "정정재",
//     type: "국내 더미",
//     gender: "남자 더미",
//     propensity: "차분함 더미",
//     needs: "친구 더미",
//     picture: "더미 사진 링크",
//     text: "버디를 요청합니다. 이유는 재밌어보여서 입니다.",
//     kakao: "https://github.com/LikeLionHGU/GloBuddy-Front/issues/11",
//   },
//   {
//     send: false, // 일단 보낸 편지함
//     inbox: 1,
//     name: "김민혁",
//     type: "꺄호",
//     gender: "여자 더미",
//     propensity: "차분함 더미",
//     needs: "친구 더미",
//     picture: "더미 사진 링크",
//     text: "버디를 요청합니다. 이유는 재밌어보여서 입니다.",
//     kakao: "https://github.com/LikeLionHGU/GloBuddy-Front/issues/11",
//   },
//   {
//     send: true, // 일단 보낸 편지함
//     inbox: 2,
//     name: "조예환",
//     type: "뭐",
//     gender: "커피",
//     propensity: "꺄호",
//     needs: "친구 더미",
//     picture: "더미 사진 링크",
//     text: "버디를 요청합니다. 이유는 재밌어보여서 입니다.",
//     kakao: "https://github.com/LikeLionHGU/GloBuddy-Front/issues/11",
//   },
//   {
//     send: true, // 일단 보낸 편지함
//     inbox: 2,
//     name: "짱구",
//     type: "배고파",
//     gender: "남자",
//     propensity: "꺄호",
//     needs: "친구 더미",
//     picture: "더미 사진 링크",
//     text: "배고프다 진짜",
//     kakao: "https://github.com/LikeLionHGU/GloBuddy-Front/issues/11",
//   },
// ];

function MailBtComponent() {
  const memberId = 1; // ToDo: memberId 받아서 넘기기
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
      <MailButton onClick={handleNavigateAlarm}>
        <IoIosMail size="30" />
      </MailButton>
    </>
  );
}

export default MailBtComponent;
