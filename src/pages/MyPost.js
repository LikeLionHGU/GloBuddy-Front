import styled from "styled-components";
import Header from "../component/Header";

const OrnageBox = styled.div`
  width: 825px;
  height: 478px;
  background-color: #ffe2c1;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 100px 40px 45px 150px;
  padding-top: 70px;
  font-family: Subtitle2;
  font-size: 27px;
  color: #48524b;
  padding: 20px;
`;

function MyPost() {
  return (
    <>
      <Header />
      <OrnageBox>내 게시물 페이지는 추후 업데이트될 예정입니다.</OrnageBox>
    </>
  );
}

export default MyPost;
