import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import ChatInfoCheckDialog from "./ChatInfoCheckDialog";
import { Horizontal } from "../../styles/StyledComponents";
import UserPiconImg from "../../img/UserPicon.png";
import { MemberIdState } from "../../store/atom";
import axios from "axios";

const MailAlarmBox = styled.div`
  display: flex;
  border-radius: 15px;
  height: 85px;
  width: 600px;
  text-align: center; //가로
  align-items: center; //세로
  border: none;
  background-color: white;
  margin-top: 20px;
  padding: 15px;
`;
const UserImg = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 25px;
`;

const Text = styled.div`
  flex: 4;
  font-size: 15px;
  font-family: Subtitle3;
`;
const ButtonWrapper = styled.div`
  flex: 1;
  margin-right: auto 0;
`;
const ConfirmBT = styled.button`
  width: 80px;
  height: 50px;
  border: none;
  background: #ffce96;
  cursor: pointer;
  border-radius: 15px;
  font-size: 13px;
  font-family: Body1;
`;
const AcceptedBT = styled.button`
  width: 80px;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  background: #d3d477;
  font-size: 13px;
  font-family: Body1;
`;
const RejectedBT = styled.button`
  width: 80px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background: #ff7648;
  font-size: 13px;
  font-family: Body1;
`;

function MailAlarmInboxComponent({ chatData, handleCancel, isOpen }) {
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedChatData, setSelectedChatData] = useState(null);
  const [kakao, setKakao] = useState(false);
  const memberId = useRecoilValue(MemberIdState);

  const handleCheck = (data) => {
    console.log(data);
    setSelectedChatData(data);
    handleCancel();
    setKakao(false);
    console.log("lkaklago", kakao);
  };
  const handleAccept = (data) => {
    setSelectedChatData(data);
    //ToDo: 추후 카카오링크 모달 띄우는 곳으로 연결
    handleCancel();
    setKakao(true);
    console.log("lkaklago", kakao);
  };

  //ToDo: 버디 신청 요청 거절 시 api 요청
  const handleReject = (data) => {
    setSelectedChatData(data);
    console.log(selectedChatData, "data");
    axios
      .patch(
        `${process.env.REACT_APP_HOST_URL}/matching/notification/receive/${memberId}/choice/${selectedChatData.matchingId}`,
        {
          ifMatched: 2, //거절
        }
      )
      .then(function (response) {
        console.log("response", response);
        handleCancel();
      })
      .catch(function (error) {
        console.log(error);
      });
    setKakao(false);
  };

  return (
    <>
      {chatData.map((data, index) => (
        <Horizontal>
          <UserImg src={UserPiconImg} alt="userIcon" />
          <MailAlarmBox key={index}>
            <Text>
              A letter from {data.senderName} has arrived for you. Go ahead and
              check it out!
            </Text>
            <ButtonWrapper>
              {data.ifMatched === 1 ? (
                <AcceptedBT onClick={() => handleAccept(data)}>
                  Accepted
                </AcceptedBT>
              ) : data.ifMatched === 2 ? (
                <RejectedBT>Rejected</RejectedBT> //1,2 텍스트 거절, 수락시 변경
              ) : (
                <ConfirmBT onClick={() => handleCheck(data)}>Confirm</ConfirmBT>
              )}
            </ButtonWrapper>
          </MailAlarmBox>
        </Horizontal>
      ))}

      {isOpen && (
        <ChatInfoCheckDialog
          chatData={selectedChatData}
          open={isOpen}
          onRejectClick={handleReject}
          onHandleCancel={handleCancel}
          kakao={kakao}
        />
      )}
    </>
  );
}

export default MailAlarmInboxComponent;
