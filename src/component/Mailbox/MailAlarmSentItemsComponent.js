import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
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
const CheckBT = styled.button`
  width: 80px;
  height: 50px;
  border: none;
  background: #ffce96;
  cursor: pointer;
  border-radius: 15px;
  font-size: 13px;
  font-family: Body1;
`;

function MailAlarmSentItemsComponent({ chatData }) {
  // useState사용을 통해 ifChecked 값이 바뀔때마다 리렌더링
  const [chatDataState, setChatDataState] = useState(chatData);
  //ToDo: 메일 확인 api 요청 후 확인 버튼 ui 선택
  const memberId = useRecoilValue(MemberIdState);
  const handleCheck = (index) => {
    // ToDo: 확인 버튼 누르면 확인되었다고 api 연결
    setChatDataState((prevState) => {
      const updatedChatData = [...prevState];
      updatedChatData[index].ifChecked = true;
      return updatedChatData; // setChatDataSate 함수 내 updatedChatData 배열을 반환 -> React는 상태가 업데이트되었음을 감지하고 해당 컴포넌트를 리렌더링
    });
    console.log("wlrma dlwjdofijwoeijf;lw kjf;lw", chatDataState[index]);
    axios
      .patch(
        `${process.env.REACT_APP_HOST_URL}/matching/notification/sent/${memberId}/check/${chatDataState[index].matchingId}`,
        {
          ifChecked: true, // 답변 확인
        }
      )
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {chatDataState.map(
        (data, index) =>
          (data.ifMatched === 1 || data.ifMatched === 2) && (
            <Horizontal>
              <UserImg src={UserPiconImg} alt="userIcon" />
              <MailAlarmBox key={index}>
                {data.ifMatched === 1 ? (
                  <Text>
                    Congrats ! You're now Global buddy with {data.senderName},
                    join your chat room to chat!
                  </Text>
                ) : data.ifMatched === 2 ? (
                  <Text>
                    Sorry, you're not a global buddy with {data.senderName},
                    find another buddy for you !
                  </Text>
                ) : null}
                {!data.ifChecked && ( // Check if data.ifChecked is false
                  <ButtonWrapper>
                    <CheckBT onClick={() => handleCheck(index)}>Read</CheckBT>
                  </ButtonWrapper>
                )}
              </MailAlarmBox>
            </Horizontal>
          )
      )}
    </>
  );
}

export default MailAlarmSentItemsComponent;
