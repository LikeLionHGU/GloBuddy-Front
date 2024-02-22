import { Fragment, useState } from "react";
import { useRecoilValue } from "recoil";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MemberIdState } from "../../../store/atom";
import { Vertical, Horizontal } from "../../../styles/StyledComponents";
import UserPiconImg from "../../../img/UserPicon.png";
import axios from "axios";

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
const UserImg = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 35px;
`;
const TitleText = styled.input`
  width: 470px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
`;
const ContentText = styled.input`
  width: 470px;
  height: 250px;
  border: 1px solid black;
  border-radius: 4px;
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
const NoCenterHorizontal = styled.div`
  //가로 정렬
  display: flex;
`;
const TagBox = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 15px;
  border: none;
  background: ${({ color }) => color};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  margin-left: 36px;
  margin-right: 18px;
  margin-top: 36px;
`;
const NextTagBox = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 12px;
  border: none;
  background: ${({ color }) => color};
  margin-left: -10px;
  margin-right: 25px;
  margin-top: 10px;
  font-size: 12px;
`;
const needTags = [
  { need: "#Culture", color: "#FBAD83" },
  { need: "#Class", color: "#FED966" },
  { need: "#Language", color: "#E8D9EC" },
  { need: "#Friends", color: "#FAEEE0" },
  { need: "#Exercise", color: "#D3D477" },
  { need: "#Information about HGU", color: "#9DC9EE" },
];

function PostCreateDialog({ open, setIsOpen }) {
  const memberId = useRecoilValue(MemberIdState);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [needTag, setNeedTag] = useState("");
  const [needColor, setNeedColor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
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
  const isFormValid = () => {
    return title.trim() !== "" && content.trim() !== "";
  };
  const postClickModal = () => {
    setOpenCheck(openCheck === 1 ? 2 : 1); // 확인 모달
    // ToDo: 멤버 아이디 받은거 가지고 있는 코드 작성 후 적용
    axios
      .post(`${process.env.REACT_APP_HOST_URL}/posts`, {
        memberId: memberId,
        needs: needTag,
        color: needColor,
        title: title,
        content: content,
      })
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(needTag, title, content);
  };
  const handleNeed = (needTag) => {
    setNeedTag(needTag.need);
    setNeedColor(needTag.color);
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
                {needTags.map((item, index) => (
                  <TagBox
                    key={index}
                    onClick={() => handleNeed(item)}
                    active={needTag === item.need}
                    color={item.color}
                  >
                    {item.need}
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
              <DialogContent>
                <Horizontal>
                  <UserImg src={UserPiconImg} alt="userIcon" />
                  <TitleText
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                    required
                  />
                </Horizontal>
                <Horizontal>
                  <NoCenterHorizontal>
                    <NextTagBox color={needColor}>{needTag}</NextTagBox>
                    <ContentText
                      type="text"
                      id="content"
                      name="content"
                      value={content}
                      placeholder="Please type in"
                      onChange={handleContentChange}
                      required
                    />
                  </NoCenterHorizontal>
                </Horizontal>
              </DialogContent>
              <DialogActions>
                <CancelBT onClick={handlePreviousStep}>Before</CancelBT>
                <NextBT onClick={postClickModal} disabled={!isFormValid()}>
                  Post
                </NextBT>
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
