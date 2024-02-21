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

const ModalContainer = styled.div`
  width: 840px;
  height: 516px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  z-index: 9999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
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

  const [isOpen, setIsOpen] = useState(false);

  const handleClickClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickUpdate = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = () => {
    console.log("수정된 정보들 확인", updateUserInfo);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <CloseButton onClick={handleClickClose}>X</CloseButton>
        <h2>프로필 수정 폼</h2>

        <Vertical>
          <input type="file" accept="image/*" onChange={handlePicture} />
          {selectedImage && <img src={selectedImage} alt="Selected" />}
        </Vertical>
        <UpdateButton onClick={handleUpdate}>수정</UpdateButton>

        {isOpen && (
          <ProfileUpdateCheckDialog open={isOpen} onClick={handleClickUpdate} />
        )}

        <div>
          <div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <div style={{ marginRight: "20px" }}>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={updateUserInfo.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <br />
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={updateUserInfo.gender}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <div>
                <label htmlFor="propensity">Propensity</label>
                <br />
                <input
                  type="text"
                  id="propensity"
                  name="propensity"
                  value={updateUserInfo.propensity}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="needs">Needs</label>
                <br />
                <input
                  type="text"
                  id="needs"
                  name="needs"
                  value={updateUserInfo.needs}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </ModalContainer>
    </>
  );
}

export default ProfileFormComponent;
