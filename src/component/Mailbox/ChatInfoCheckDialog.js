import { Fragment } from "react";
import { useState } from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlineLink } from "react-icons/ai";
import { Horizontal, Vertical } from "../../styles/StyledComponents";
import LetterDialogImg from "../../img/LetterDialog.png";
import UserPiconImg from "../../img/UserPicon.png";

const StyledPaper = styled(Paper)`
  width: 580px;
  height: 513px;
  display: flex;
  align-items: center; //세로
  justify-content: center; //세로
  padding: 20px;
`;
const CancelBT = styled.button`
  width: 54px;
  height: 52px;
  border: none;
  background: #ff9571;
  cursor: pointer;
  border-radius: 100px;
  font-size: 34px;
  font-family: Subtitle3;
  margin-left: auto;
`;
const CongratsText = styled.p`
  font-size: 22px;
  font-family: Body2;
  width: 510px;
  text-align: center;
  padding-top: 70px;
`;
const BuddyRequestText = styled.div`
  width: 368px;
  height: 140px;
  border: 1px solid #ff9571;
  border-radius: 30px;
  display: flex;
  align-items: center; //세로
  justify-content: center; //세로
  margin-top: 5px;
  padding: 10px;
`;
const RejectBT = styled.button`
  width: 100px;
  height: 45px;
  border: none;
  background: #ffe2c1;
  cursor: pointer;
  font-size: 24px;
  font-family: Subtitle3;
  margin-right: 40px;
`;
const AcceptBT = styled.button`
  width: 100px;
  height: 45px;
  border: none;
  background: #ffce96;
  cursor: pointer;
  font-size: 24px;
  font-family: Subtitle3;
`;
const UserImg = styled.img`
  width: 75px;
  height: 75px;
`;
const NoCenterHorizontal = styled.div`
  //가로 정렬
  display: flex;
`;
const SomeCenterHorizontal = styled.div`
  //가로 정렬
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 13px;
  font-family: Subtitle3;
`;
const NoCenterVertical = styled.div`
  //세로 정렬
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const InfoBox = styled.div`
  height: 20px;
  border-radius: 30px;
  border: 2px solid #ff9571;
  padding: 8px;
  padding-top: 10px;
  margin: 0;
  width: fit-content;
  margin-left: 15px;
`;
const InfoText = styled.p`
  font-size: 15px;
  font-family: Subtitle3;
  padding: 0;
  margin: 0;
  margin-top: 10px;
`;
const LetterImg = styled.img`
  width: 274px;
  height: 90px;
`;
const LinkText = styled.a`
  color: black;
  text-decoration: none;
  font-size: 28px;
  font-family: Button2;
  border-bottom: 2px solid black;
`;

export default function ChatInfoCheckDialog({
  chatData,
  open,
  onRejectClick,
  kakao,
}) {
  const [accept, setAccept] = useState(false); // ToDo: 추후 chatData에 있는 변수로 설정
  const handleAcceptClick = () => {
    setAccept(true);
    // ToDo: 거절 승인 api 연결하기

    // ToDo: 거절 승인 미확인 읽어오는 api 연결
  };
  return (
    <Fragment>
      <Dialog open={open} onClose={onRejectClick} PaperComponent={StyledPaper}>
        {accept || kakao ? (
          <>
            <CancelBT onClick={onRejectClick}>X</CancelBT>
            <DialogTitle>
              <CongratsText>
                Congrats ! You're now Global buddy with {chatData.name}, join
                his chat room to chat!
              </CongratsText>
            </DialogTitle>
            <DialogContent>
              <Vertical>
                <LetterImg src={LetterDialogImg} alt="letter icon" />
                <p>
                  <Horizontal>
                    <AiOutlineLink
                      style={{ width: "37px", height: "78px", margin: 0 }}
                    />
                    <LinkText
                      href={chatData.chatLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to KakaoTalk chat room
                    </LinkText>
                  </Horizontal>
                </p>
              </Vertical>
            </DialogContent>
          </>
        ) : (
          <>
            <CancelBT onClick={onRejectClick}>X</CancelBT>
            <DialogContent>
              <NoCenterHorizontal>
                <Vertical>
                  <UserImg src={UserPiconImg} alt="userIcon" />
                  <InfoText>{chatData.name}</InfoText>
                </Vertical>
                <NoCenterVertical>
                  <SomeCenterHorizontal>
                    Gender <InfoBox>{chatData.gender}</InfoBox>
                  </SomeCenterHorizontal>
                  <SomeCenterHorizontal>
                    Nationality <InfoBox>{chatData.type}</InfoBox>
                  </SomeCenterHorizontal>
                  <SomeCenterHorizontal>
                    MBTI <InfoBox>{chatData.propensity}</InfoBox>
                  </SomeCenterHorizontal>
                </NoCenterVertical>
              </NoCenterHorizontal>
              <DialogTitle
                style={{
                  fontFamily: "Subtitle3",
                  fontSize: "28px",
                  margin: 0,
                  padding: 0,
                }}
              >
                Buddy Request
              </DialogTitle>
              <DialogContentText>
                <BuddyRequestText>{chatData.message}</BuddyRequestText>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <RejectBT onClick={onRejectClick}>Reject</RejectBT>
              <AcceptBT onClick={handleAcceptClick}>Accept</AcceptBT>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Fragment>
  );
}
