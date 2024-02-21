import { useState } from "react";
import styled from "styled-components";
import PostCreateDialog from "./PostCreateDialog";
import PostButtonImg from "../../../img/PostButton.png";

const PostButton = styled.button`
  padding: 0;
  border: none;
  background: url(${PostButtonImg}) no-repeat;
  background-size: cover;
  width: 680px; /* 버튼의 너비 */
  height: 85px; /* 버튼의 높이 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
`;
const RequestForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
function PostCreateBtComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const createBtClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <PostButton onClick={createBtClick} />
      {isOpen && <PostCreateDialog open={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default PostCreateBtComponent;
