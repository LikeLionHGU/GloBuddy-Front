import { Fragment } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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
  const [accept, setAccept] = useState(false);
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
                {chatData.name}님과 버디가 되었습니다. 링크에 접속하여 대화를
                나눠보세요 !
              </p>
            </DialogTitle>
            <DialogContent>
              <p>
                <a
                  href={chatData.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  카카오톡 링크
                </a>
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
              신청자 정보 프로필 확인하기
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
                거절
              </Button>
              <Button
                onClick={handleAcceptClick}
                color="warning"
                style={{ fontFamily: "TheJamsilRegular" }}
              >
                수락
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Fragment>
  );
}
