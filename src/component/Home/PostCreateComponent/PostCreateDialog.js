import { Fragment, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PostText = styled.input`
  width: 400px;
  height: 200px;
`;

function PostCreateDialog({ open, setIsOpen }) {
  const [post, setPost] = useState("");
  const handleChange = (e) => {
    setPost(e.target.value);
  };
  // 등록 확인 성공 모달
  const [openCheck, setOpenCheck] = useState(true);
  const postClickModal = () => {
    setOpenCheck(!openCheck); // 확인 모달
    // ToDo: 글을 등록하는 부분 & 데이터 확인 및 api 연결
    console.log(post);
  };
  const cancleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Fragment>
        <Dialog open={open} onClose={cancleClick}>
          {openCheck ? (
            <>
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
                <Button
                  onClick={cancleClick}
                  color="secondary"
                  style={{ fontFamily: "TheJamsilRegular" }}
                >
                  취소
                </Button>
                <Button
                  onClick={postClickModal}
                  color="warning"
                  style={{ fontFamily: "TheJamsilRegular" }}
                >
                  등록
                </Button>
              </DialogActions>
            </>
          ) : (
            <>
              <DialogTitle style={{ fontFamily: "TheJamsilRegular" }}>
                글 등록 성공 모달임
              </DialogTitle>
              <DialogContent>
                <DialogContentText>글 등록에 성공했습니다.</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={cancleClick}
                  color="secondary"
                  style={{ fontFamily: "TheJamsilRegular" }}
                >
                  확인
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Fragment>
    </>
  );
}

export default PostCreateDialog;
