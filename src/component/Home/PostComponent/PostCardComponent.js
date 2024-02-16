import React, { useState } from "react";
import styled from "styled-components";

const DetailButton = styled.button`
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: black;
  background: white;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  border: 1px solid lightgray;
  margin: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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

const RequestForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
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

const SubmitButton = styled.button`
  margin-top: 10px;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: black;
  background: white;
`;

function PostCardComponent({ postData }) {
  const [showPopup, setShowPopup] = useState(false);
  const [requestText, setRequestText] = useState("");
  const [kakaoLink, setKakaoLink] = useState("");
  const [isLinkValid, setIsLinkValid] = useState(true);
  const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);

  const handleApplyClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setRequestText("");
    setKakaoLink("");
    setIsLinkValid(true);
    setIsRequestSubmitted(false);
  };

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
      setIsRequestSubmitted(true);
      setShowPopup(false);
    } else {
      setIsLinkValid(false);
    }
  };

  return (
    <div>
      <CardContainer>
        {postData.map((data, index) => (
          <Card key={index}>
            <h1>{data.title}</h1>
            <h3>
              이름 {data.name} / 국내|국제 {data.type}
            </h3>
            <h3>{data.gender}</h3>
            <h3>{data.needs}</h3>
            <DetailButton>자세히보기</DetailButton>
            <button onClick={handleApplyClick}>신청하기</button>
          </Card>
        ))}
      </CardContainer>
      {showPopup && (
        <Popup>
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
        </Popup>
      )}
      {isRequestSubmitted && (
        <Popup>
          <h2>완료되었습니다!</h2>
          <button onClick={closePopup}>닫기</button>
        </Popup>
      )}
    </div>
  );
}

export default PostCardComponent;
