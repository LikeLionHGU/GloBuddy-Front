import { useState } from "react";
import styled from "styled-components";
import { Vertical } from "../../styles/StyledComponents";

const Box = styled.div`
  margin-top: 300px;
`;
const NextButton = styled.button`
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: black;
  background: lightgreen;
  margin-left: auto;
  height: 50px;
  width: 100px;
`;

function ProfileComponent5({ userInfo, onNext }) {
  const [picture, setPicture] = useState(userInfo.picture);
  const [selectedImage, setSelectedImage] = useState(userInfo.picture);
  const handlePicture = (picture) => {
    const file = picture.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setPicture(file.name);
  };

  return (
    <>
      <h2>프로필 사진을 등록해주세요 (필수 아님)</h2>
      <Vertical>
        <input type="file" accept="image/*" onChange={handlePicture} />
        {selectedImage && <img src={selectedImage} alt="Selected" />}
      </Vertical>
      <Box />
      <NextButton onClick={() => onNext({ ...userInfo, picture })}>
        다음 5/5
      </NextButton>
    </>
  );
}

export default ProfileComponent5;
