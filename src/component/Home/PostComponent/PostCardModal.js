import { useState } from "react";
import styled from "styled-components";

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 20px;
  background: white;
  border: 1px solid lightgray;
  border-radius: 8px;
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
const RequestForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: black;
  background: white;
`;

function PostCardModal({ closePopup }) {
  const [requestText, setRequestText] = useState("");
  const [kakaoLink, setKakaoLink] = useState("");
  const [isLinkValid, setIsLinkValid] = useState(true);
  const [showCheckPopup, setShowCheckPopup] = useState(true);

  const handleRequestTextChange = (e) => {
    setRequestText(e.target.value);
  };
  const handleKakaoLinkChange = (e) => {
    setKakaoLink(e.target.value);
    setIsLinkValid(true);
  };

  const handleSubmit = () => {
    console.log("요청 내용:", requestText);
    console.log("카카오톡 링크:", kakaoLink);

    if (kakaoLink.startsWith("https://open.kakao.com/")) {
      setShowCheckPopup(false);
      //ToDo: API 호출
    } else {
      setIsLinkValid(false);
    }
  };

  return (
    <>
      <Popup>
        {showCheckPopup ? (
          <>
            <CloseButton onClick={closePopup}>X</CloseButton>
            <h2>버디 요청하기</h2>
            <p>텍스트를 입력하세요. ex) 가벼운 인사말을 적어보세요.</p>
            <textarea
              value={requestText}
              onChange={handleRequestTextChange}
              rows={4}
              cols={30}
            />
            <p>오픈 카카오톡 링크를 삽입하세요.</p>
            <input
              type="text"
              value={kakaoLink}
              onChange={handleKakaoLinkChange}
            />
            {!isLinkValid && (
              <p style={{ color: "red" }}>형식이 바르지 않습니다!</p>
            )}
            <RequestForm>
              <SubmitButton onClick={handleSubmit}>보내기</SubmitButton>
              <button onClick={closePopup}>취소</button>
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
