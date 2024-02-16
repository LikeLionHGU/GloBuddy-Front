import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import MailAlarmInboxComponent from "../component/Mailbox/MailAlarmInboxComponent";
import MailAlarmSentItemsComponent from "../component/Mailbox/MailAlarmSentItemsComponent";
import { Vertical, Horizontal } from "../styles/StyledComponents";
import { IoMailOutline } from "react-icons/io5";
import LetterBoxImg from "../img/LetterBox.png";

const BT = styled.button`
  border: none;
  border-radius: 15px;
  background: #ffd4a3;
  width: 150px;
  height: 60px;
  font-size: 18px;
  font-family: Subtitle3;
  cursor: pointer;
`;
const DetailText = styled.p`
  font-size: 12px;
  font-family: Subtitle3;
  color: #948d8d;
  margin-bottom: 40px;
`;
const OrnageBox = styled.div`
  width: 825px;
  height: 408px;
  background-color: #ffe2c1;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 0 40px 45px 150px;
  padding-top: 70px;
  font-family: Subtitle2;
  font-size: 27px;
  color: #48524b;
`;
const LetterText = styled.p`
  font-family: Subtitle3;
  font-size: 30px;
`;
const WhoText = styled.p`
  font-family: Subtitle3;
  font-size: 17px;
  margin-left: 30px;
  color: #948d8d;
  margin-top: 23px;
`;
const LetterImg = styled.img`
  width: 180px;
  height: 185px;
  margin-top: 27px;
  margin-left: auto;
  margin-right: 25px;
`;
export const NoCenterVertical = styled.div`
  //세로 정렬
  display: flex;
  flex-direction: column;
`;
export const NoCenterHorizontal = styled.div`
  //가로 정렬
  display: flex;
  align-items: center;
  margin-left: 150px;
`;
function Alarm() {
  const { state } = useLocation();
  const [show, setShow] = useState(true);

  const handleShowInbox = () => {
    setShow(true); // Inbox 보이기
  };

  const handleShowSentItems = () => {
    setShow(false); // Sent Items 보이기
  };
  const isEmptyInbox = state.every((data) => data.inbox === 0);

  return (
    <Horizontal>
      <Vertical>
        <BT onClick={handleShowInbox}>Inbox</BT>
        <DetailText>Who wants to meet me</DetailText>
        <BT onClick={handleShowSentItems}>Sent Items</BT>
        <DetailText>Who I want to meet</DetailText>
      </Vertical>
      <NoCenterVertical>
        <NoCenterHorizontal>
          <IoMailOutline
            style={{ width: "47px", height: "35px", color: "#FF9571" }}
          />
          <LetterText>Letter</LetterText>
          <WhoText>Who wants to meet me</WhoText>
        </NoCenterHorizontal>
        <Vertical>
          {isEmptyInbox ? (
            <OrnageBox>
              Your Letterbox is empty!
              <br /> Meet more global buddies from the buddy request !
              <LetterImg src={LetterBoxImg} alt="letterbox" />
            </OrnageBox>
          ) : show ? (
            <MailAlarmInboxComponent chatData={state} />
          ) : (
            <MailAlarmSentItemsComponent chatData={state} />
          )}
        </Vertical>
      </NoCenterVertical>
    </Horizontal>
  );
}

export default Alarm;
