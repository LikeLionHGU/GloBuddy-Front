import React, { useState } from "react";
import styled from "styled-components";
import { Horizontal } from "../../styles/StyledComponents";
import UserPiconImg from "../../img/UserPicon.png";

const MailAlarmBox = styled.div`
  display: flex;
  border-radius: 8px;
  height: 85px;
  width: 600px;
  text-align: center; //가로
  border: none;
  background-color: white;
  margin-top: 20px;
`;
const UserImg = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 25px;
`;
const Text = styled.div`
  flex: 3;
`;
const ButtonWrapper = styled.div`
  flex: 1;
  margin-right: auto 0;
`;
const CheckBT = styled.button`
  border: 1px solid lightgray;
  background: yellow;
  cursor: pointer;
`;

function MailAlarmSentItemsComponent({ chatData }) {
  // useState사용을 통해 send 값이 바뀔때마다 리렌더링
  const [chatDataState, setChatDataState] = useState(chatData);
  //ToDo: 메일 확인 api 요청 후 확인 버튼 ui 선택
  const handleCheck = (index) => {
    // ToDo: 확인 버튼 누르면 확인되었다고 api 연결
    setChatDataState((prevState) => {
      const updatedChatData = [...prevState];
      updatedChatData[index].send = true;
      return updatedChatData; // setChatDataSate 함수 내 updatedChatData 배열을 반환 -> React는 상태가 업데이트되었음을 감지하고 해당 컴포넌트를 리렌더링
    });
  };

  return (
    <>
      {chatDataState.map(
        (data, index) =>
          (data.inbox === 1 || data.inbox === 2) && (
            <Horizontal>
              <UserImg src={UserPiconImg} alt="userIcon" />
              <MailAlarmBox key={index}>
                {data.inbox === 1 ? (
                  <Text>
                    Congrats ! You're now Global buddy with {data.name}, join
                    your chat room to chat!
                  </Text>
                ) : data.inbox === 2 ? (
                  <Text>
                    Sorry, you're not a global buddy with {data.name}, find
                    another buddy for you !
                  </Text>
                ) : null}
                {!data.send && ( // Check if data.send is false
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
