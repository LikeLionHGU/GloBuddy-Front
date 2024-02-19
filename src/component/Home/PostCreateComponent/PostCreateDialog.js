import { Fragment, useState } from "react";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Vertical, Horizontal } from "../../../styles/StyledComponents";

const StyledPaper = styled(Paper)`
  height: 516px;
  display: flex;
  align-items: center; //세로
  justify-content: center; //세로
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 40px;
  padding-top: 10px;
  border: 2px solid black;
`;
const CircleCancelBT = styled.button`
  width: 39px;
  height: 36px;
  border: none;
  background: #ff9571;
  cursor: pointer;
  border-radius: 100px;
  font-size: 25px;
  font-family: Subtitle3;
  margin-left: auto;
  margin-right: -50px;
`;
const QuestionText = styled.p`
  font-size: 33px;
  font-family: Subtitle1;
  text-align: center;
  padding: 0;
  margin: 0;
`;
const PostText = styled.input`
  width: 400px;
  height: 200px;
`;
const ChooseText = styled.p`
  font-size: 27px;
  font-family: Subtitle3;
  text-align: center;
  padding-top: 10px;
`;
const CancelBT = styled.button`
  width: 100px;
  height: 45px;
  border: none;
  background: #ffe2c1;
  cursor: pointer;
  font-size: 24px;
  font-family: Subtitle3;
  margin-right: 40px;
`;
const NextBT = styled.button`
  width: 100px;
  height: 45px;
  border: none;
  background: #ffce96;
  cursor: pointer;
  font-size: 24px;
  font-family: Subtitle3;
`;
const TagBox = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 15px;
  border: 1px solid black;
  background: ${({ active }) => (active ? "#FBAD83" : "white")};
  margin-left: 36px;
  margin-right: 18px;
  margin-top: 36px;
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
        <Dialog open={open} onClose={cancleClick} PaperComponent={StyledPaper}>
          {openCheck === 0 && (
            <Vertical>
              <CircleCancelBT onClick={cancleClick}>X</CircleCancelBT>
              <QuestionText>What are your needs?</QuestionText>
              <DialogContent>
                {needTags.map((need, index) => (
                  <TagBox
                    key={index}
                    onClick={() => handleNeed(need)}
                    active={needTag === need}
                  >
                    {need}
                  </TagBox>
                ))}
                <ChooseText>Choose your own needs!</ChooseText>
              </DialogContent>
              <Horizontal>
                <CancelBT onClick={cancleClick}>Cancel</CancelBT>
                <NextBT onClick={handleNextStep} disabled={nextButtonDisabled}>
                  Next
                </NextBT>
              </Horizontal>
            </Vertical>
          )}
          {openCheck === 1 && (
            <Vertical>
              <CircleCancelBT onClick={cancleClick}>X</CircleCancelBT>
              <DialogTitle style={{ fontFamily: "TheJamsilRegular" }}>
                글 등록하기 모달임
              </DialogTitle>
              <DialogContent>
                <PostText
                  type="text"
                  id="post"
                  name="post"
                  value={post}
                  onChange={handleChange}
                />
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
