import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import MailAlarmInboxComponent from "../component/Mailbox/MailAlarmInboxComponent";
import MailAlarmSentItemsComponent from "../component/Mailbox/MailAlarmSentItemsComponent";
import { Vertical, Horizontal } from "../styles/StyledComponents";
import { IoMailOutline } from "react-icons/io5";
import LetterBoxImg from "../img/LetterBox.png";
import HeaderContainer from "../component/MainHeader";

const BT = styled.button`
  border: none;
  border-radius: 15px;
  background: ${({ active }) => (active ? "#FFCE96" : "#FFE2C1")};
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
  height: 478px;
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
  padding: 20px;
`;
const OrnageMailBox = styled.div`
  width: 825px;
  height: 478px;
  background-color: #ffe2c1;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-start; /* 첫 번째 요소가 항상 위에 위치하도록 수정 */
  margin: 0 40px 45px 150px;
  font-family: Subtitle2;
  font-size: 15px;
  color: black;
  overflow-y: auto;
  padding: 20px;
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
  const [inboxActive, setInboxActive] = useState(true);
  const [sentItemsActive, setSentItemsActive] = useState(false);

  const handleShowInbox = () => {
    setShow(true); // Inbox 보이기
    setInboxActive(true);
    setSentItemsActive(false);
  };

  const handleShowSentItems = () => {
    setShow(false); // Sent Items 보이기
    setInboxActive(false);
    setSentItemsActive(true);
  };
  const isEmptyInbox = state.every((data) => data.ifMatched === 0) && !show;

  return (
    <Horizontal>
      <HeaderContainer />
      <Vertical>
        <BT active={inboxActive} onClick={handleShowInbox}>
          Inbox
        </BT>
        <DetailText>Who wants to meet me</DetailText>
        <BT active={sentItemsActive} onClick={handleShowSentItems}>
          Sent Items
        </BT>
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
              <LetterImg src={LetterBoxImg} alt="letterbox" />
            </OrnageBox>
          ) : show ? (
            <OrnageMailBox>
              <MailAlarmInboxComponent chatData={state} />
            </OrnageMailBox>
          ) : (
            <OrnageMailBox>
              <MailAlarmSentItemsComponent chatData={state} />
            </OrnageMailBox>
          )}
        </Vertical>
      </NoCenterVertical>
    </Horizontal>
  );
}

export default Alarm;
