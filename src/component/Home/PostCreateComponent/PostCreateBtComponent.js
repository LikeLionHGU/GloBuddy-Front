import { useState } from "react";
import Button from "@mui/material/Button";
import PostCreateDialog from "./PostCreateDialog";
import NewModal from "../PostComponent/NewModal"; // 새로운 모달 컴포넌트를 import 해주세요.

function PostCreateBtComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false); // 새로운 모달의 상태를 추가해주세요.

  const createBtClick = () => {
    setIsOpen(!isOpen);
  };

  const openNewModal = () => {
    setIsNewModalOpen(true); // 새로운 모달 열기
  };

  const closeNewModal = () => {
    setIsNewModalOpen(false); // 새로운 모달 닫기
  };

  return (
    <>
      <Button onClick={createBtClick}>글 등록하기 버튼임</Button>
      {isOpen && <PostCreateDialog open={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default PostCreateBtComponent;
