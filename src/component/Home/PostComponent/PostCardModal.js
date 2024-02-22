import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import MassageImg from "../../../img/Massage.png";
import CloseButtonImg from "../../../img/CloseButton.png";
import { MemberIdState } from "../../../store/atom";
import axios from "axios";

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 840.75px;
  width: 516px;
  padding: 20px;
  background: white;
  border: 1px solid lightgray;
  border-radius: 2px;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const TitleImage = styled.img`
  width: 63px;
  height: 73px;
`;
const Textarea = styled.textarea`
  width: 450px;
  height: 100px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 4px;
`;
const RequestForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid #ffce96;
  color: black;
  background: #ffce96;
  width: 100px;
  height: 40px;
  margin-right: 7px;
`;

const CloseImage = styled.img`
  width: 20px;
  height: 20px;
`;
const ChatLinkInput = styled.input`
  cursor: pointer;
  text-decoration: underline;
  border: none;
  width: 450px;

  margin-bottom: 10px;
  padding: 5px;
  border-radius: 4px;
`;

function PostCardModal({ closePopup, postInfo }) {
  const memberId = useRecoilValue(MemberIdState);
  const [requestText, setRequestText] = useState("");
  const [kakaoLink, setKakaoLink] = useState("");
  const [isLinkValid, setIsLinkValid] = useState(true);
  const [showCheckPopup, setShowCheckPopup] = useState(true);

  const handleRequestTextChange = (e) => {
    setRequestText(e.target.value);
    console.log(e.target.value);
  };
  const handleKakaoLinkChange = (e) => {
    setKakaoLink(e.target.value);
    console.log(e.target.value);
    setIsLinkValid(true);
  };

  const handleSubmit = () => {
    console.log("요청 내용:", requestText);
    console.log("카카오톡 링크:", kakaoLink);
    console.log("postInfo", postInfo);

    if (kakaoLink.startsWith("https://open.kakao.com/")) {
      setShowCheckPopup(false);
      //ToDo: API 호출
      axios.post(
        `${process.env.REACT_APP_HOST_URL}/matching/${postInfo.postId}`,
        {
          memberId: memberId,
          message: requestText,
          chatLink: kakaoLink,
        }
      );
    } else {
      setIsLinkValid(false);
    }
  };

  return (
    <>
      <Popup>
        {showCheckPopup ? (
          <>
            <CloseButton onClick={closePopup}>
              <CloseImage src={CloseButtonImg} alt="Close" />
            </CloseButton>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginBottom: "12px",
                }}
              >
                <h2>Buddy Request</h2>
                <TitleImage src={MassageImg} alt="Buddy Request" />
              </div>
              <Textarea
                value={requestText}
                onChange={handleRequestTextChange}
                rows={4}
                cols={30}
                placeholder="Please type in EX) Write a lighthearted greeting."
              />
              <p>
                <ChatLinkInput
                  type="text"
                  value={kakaoLink}
                  onChange={handleKakaoLinkChange}
                  placeholder="Insert your Open Chat room link."
                />
              </p>
              {!isLinkValid && (
                <p style={{ color: "red" }}>
                  The link is not in the correct format, please enter it again.
                </p>
              )}
            </div>
            <RequestForm>
              <SubmitButton onClick={handleSubmit}>Send</SubmitButton>
            </RequestForm>
          </>
        ) : (
          <>
            <h2>완료되었습니다!</h2>
            <button onClick={closePopup}>닫기</button>
          </>
        )}
      </Popup>
    </>
  );
}

export default PostCardModal;
