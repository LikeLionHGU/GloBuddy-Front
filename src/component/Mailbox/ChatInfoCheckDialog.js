import { Fragment } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlineLink } from "react-icons/ai";
import { Horizontal } from "../../styles/StyledComponents";

const LeftContent = styled.div`
  background-color: lightblue;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
`;

const RightContent = styled.div`
  background-color: lightgreen;
  padding: 10px;
  border-radius: 5px;
`;

export default function ChatInfoCheckDialog({ chatData, open, onRejectClick }) {
  const [accept, setAccept] = useState(false); // ToDo: 추후 chatData에 있는 변수로 설정
  const handleAcceptClick = () => {
    setAccept(true);
    // ToDo: 거절 승인 api 연결하기
    // ToDo: 거절 승인 미확인 읽어오는 api 연결
  };
  return (
    <Fragment>
      <Dialog open={open} onClose={onRejectClick}>
        {accept ? (
          <>
            <DialogTitle>
              <p>
                Congrats ! You're now Global buddy with {chatData.name}, join
                his chat room to chat!
              </p>
            </DialogTitle>
            <DialogContent>
              <p>
                <Horizontal>
                  <AiOutlineLink />
                  <a
                    href={chatData.kakao}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link to KakaoTalk chat room
                  </a>
                </Horizontal>
              </p>
            </DialogContent>
            <Button
              onClick={onRejectClick}
              color="secondary"
              style={{ fontFamily: "TheJamsilRegular" }}
            >
              닫기
            </Button>
          </>
        ) : (
          <>
            <DialogTitle style={{ fontFamily: "TheJamsilRegular" }}>
              Buddy Request
            </DialogTitle>
            <DialogContent>
              <Horizontal>
                <LeftContent>
                  <DialogContentText style={{ fontFamily: "TheJamsilLight" }}>
                    <p>이름: {chatData.name}</p>
                    <p>타입: {chatData.type}</p>
                    <p>성별: {chatData.gender}</p>
                    <p>성향: {chatData.propensity}</p>
                    <p>니즈: {chatData.needs}</p>
                  </DialogContentText>
                </LeftContent>
                <RightContent>
                  <DialogContentText style={{ fontFamily: "TheJamsilLight" }}>
                    <p>{chatData.text}</p>
                  </DialogContentText>
                </RightContent>
              </Horizontal>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={onRejectClick}
                color="secondary"
                style={{ fontFamily: "TheJamsilRegular" }}
              >
                Reject
              </Button>
              <Button
                onClick={handleAcceptClick}
                color="warning"
                style={{ fontFamily: "TheJamsilRegular" }}
              >
                Accept
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Fragment>
  );
}
