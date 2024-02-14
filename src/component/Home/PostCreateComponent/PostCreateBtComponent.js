import { useState } from "react";
import Button from "@mui/material/Button";
import PostCreateDialog from "./PostCreateDialog";

function PostCreateBtComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const createBtClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button onClick={createBtClick}>글 등록하기 버튼임</Button>

      {isOpen && <PostCreateDialog open={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default PostCreateBtComponent;
