import { useState } from "react";
import { UserTokenState } from "../../store/atom";
import jwtDecode from "jwt-decode";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Vertical } from "../../styles/StyledComponents";
import ProfileUpdateCheckDialog from "../PersonalProfile/ProfileUpdateCheckDialog";

const UpdateButton = styled.button`
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: black;
  background: white;
`;

function ProfileFormComponent() {
  const userToken = useRecoilValue(UserTokenState);
  const decodedToken = jwtDecode(userToken);
  const [updateUserInfo, setUpdateUserInfo] = useState({
    name: decodedToken.name,
    type: "더미데이터 타입",
    gender: "더미데이터 성별",
    propensity: "더미데이터 성격",
    needs: "더미데이터 니즈",
    picture: decodedToken.picture,
  });
  const [selectedImage, setSelectedImage] = useState(updateUserInfo.picture);
  const handlePicture = (picture) => {
    const file = picture.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setUpdateUserInfo((prevState) => ({
      ...prevState,
      picture: file.name,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // update check dialog
  const [isOpen, setIsOpen] = useState(false);
  const handleClickUpdate = () => {
    setIsOpen(!isOpen);
  };
  const handleUpdate = () => {
    //ToDo: 수정 api 연결
    console.log("수정된 정보들 확인", updateUserInfo);
    //ToDo: 수정 성공 모달
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h2>프로필 수정 폼</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={updateUserInfo.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={updateUserInfo.type}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={updateUserInfo.gender}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="propensity">Propensity:</label>
        <input
          type="text"
          id="propensity"
          name="propensity"
          value={updateUserInfo.propensity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="needs">Needs:</label>
        <input
          type="text"
          id="needs"
          name="needs"
          value={updateUserInfo.needs}
          onChange={handleChange}
        />
      </div>
      <Vertical>
        <input type="file" accept="image/*" onChange={handlePicture} />
        {selectedImage && <img src={selectedImage} alt="Selected" />}
      </Vertical>
      <UpdateButton onClick={handleUpdate}>수정</UpdateButton>

      {isOpen && (
        <ProfileUpdateCheckDialog open={isOpen} onClick={handleClickUpdate} />
      )}
    </>
  );
}

export default ProfileFormComponent;
