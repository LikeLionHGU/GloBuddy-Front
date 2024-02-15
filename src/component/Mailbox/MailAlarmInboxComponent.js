import { useState } from "react";
import styled from "styled-components";
import ChatInfoCheckDialog from "./ChatInfoCheckDialog";

const MailAlarmBox = styled.div`
  display: flex;
  border-radius: 8px;
  height: 30px;
  width: 700px;
  text-align: center; //가로
  border: 1px solid lightgray;
  margin-top: 10px;
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

function MailAlarmInboxComponent({ chatData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChatData, setSelectedChatData] = useState(null);

  //ToDo: 메일 확인 api 요청 후 확인 버튼 ui 선택
  const handleCheck = (data) => {
    console.log(data);
    setSelectedChatData(data);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {chatData.map((data, index) => (
        <MailAlarmBox key={index}>
          <Text>
            A letter from {data.name} has arrived for you. Go ahead and check it
            out!
          </Text>
          <ButtonWrapper>
            <CheckBT onClick={() => handleCheck(data)}>Confirm</CheckBT>
          </ButtonWrapper>
        </MailAlarmBox>
      ))}

      {isOpen && (
        <ChatInfoCheckDialog
          chatData={selectedChatData}
          open={isOpen}
          onRejectClick={handleCheck}
        />
      )}
    </>
  );
}

export default MailAlarmInboxComponent;
