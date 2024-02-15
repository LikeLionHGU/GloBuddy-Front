import { Fragment, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Vertical, Horizontal } from "../../../styles/StyledComponents";

const PostText = styled.input`
  width: 400px;
  height: 200px;
`;
const CancelButton = styled.button`
  font-size: 20px;
  margin-left: auto;
  margin-right: 20px;
  background-color: none;
  border: none;
`;
const FromButton = styled.button`
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: black;
  background: ${({ active }) => (active ? "pink" : "white")};
  margin-right: 10px;
`;
const needTags = [
  "#Culture",
  "#Class",
  "#Language",
  "#Friends",
  "#Exercise",
  "#Information about HGU",
];

function PostCreateDialog({ open, setIsOpen }) {
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [needTag, setNeedTag] = useState("");
  const [post, setPost] = useState("");
  const handleChange = (e) => {
    setPost(e.target.value);
  };
  // 등록 확인 성공 모달
  const [openCheck, setOpenCheck] = useState(0);

  const handlePreviousStep = () => {
    setOpenCheck(0); // 이전 단계로 돌아갈 때는 openCheck를 0으로 설정
  };
  const handleNextStep = () => {
    const num = openCheck + 1;
    setOpenCheck(num);
  };
  const cancleClick = () => {
    setIsOpen(false);
  };
  const postClickModal = () => {
    setOpenCheck(openCheck === 1 ? 2 : 1); // 확인 모달
    // ToDo: 글을 등록하는 부분 & 데이터 확인 및 api 연결
    console.log(needTag, post);
  };
  const handleNeed = (needTag) => {
    setNeedTag(needTag);
    setNextButtonDisabled(false);
  };

  return (
    <>
      <Fragment>
        <Dialog open={open} onClose={cancleClick}>
          {openCheck === 0 && (
            <Vertical>
              <CancelButton onClick={cancleClick}>X</CancelButton>
              <DialogTitle style={{ fontFamily: "TheJamsilRegular" }}>
                What are your needs?
              </DialogTitle>
              <DialogContent>
                {needTags.map((need, index) => (
                  <FromButton
                    key={index}
                    onClick={() => handleNeed(need)}
                    active={needTag === need}
                  >
                    {need}
                  </FromButton>
                ))}
                <p>Choose your own needs!</p>
              </DialogContent>
              <Horizontal>
                <Button onClick={cancleClick}>Cancel</Button>
                <Button onClick={handleNextStep} disabled={nextButtonDisabled}>
                  Next
                </Button>
              </Horizontal>
            </Vertical>
          )}
          {openCheck === 1 && (
            <Vertical>
              <CancelButton onClick={cancleClick}>X</CancelButton>
              <DialogTitle style={{ fontFamily: "TheJamsilRegular" }}>
                글 등록하기 모달임
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <PostText
                    type="text"
                    id="post"
                    name="post"
                    value={post}
                    onChange={handleChange}
                  />
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handlePreviousStep}>Prev</Button>
                <Button onClick={postClickModal}>Post</Button>
              </DialogActions>
            </Vertical>
          )}
          {openCheck === 2 && (
            <Vertical>
              <DialogTitle style={{ fontFamily: "TheJamsilRegular" }}>
                Yout post is posted.
              </DialogTitle>
              <DialogContent>
                <DialogContentText></DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={cancleClick}>Confirm</Button>
              </DialogActions>
            </Vertical>
          )}
        </Dialog>
      </Fragment>
    </>
  );
}

export default PostCreateDialog;
