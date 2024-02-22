import { useState } from "react";
import { UserTokenState } from "../../store/atom";
import jwtDecode from "jwt-decode";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Vertical } from "../../styles/StyledComponents";
import ProfileUpdateCheckDialog from "../PersonalProfile/ProfileUpdateCheckDialog";
import XButtonImg from "../../img/XButton.png";
import UserPiconImg from "../../img/UserPicon.png";

const UpdateButton = styled.button`
  border-radius: 8px;
  font-size: 20px;
  font-family: Body2;
  border: none;
  width: 100px;
  height: 50px;
  color: white;
  margin-left: auto;
  margin-right: 20px;
  background-color: #ffa947ae;
  cursor: pointer;
`;
const Footer = styled.div`
  height: 128px;
  background-color: #ffe2c1;
  width: 100%;
  display: flex;
  align-items: center;
`;
const UserImage = styled.img`
  width: 164px; /* 원하는 가로 크기로 설정 */
  height: 168px; /* 원하는 세로 크기로 설정 */
  margin-right: 30px;
`;

const ModalContainer = styled.div`
  width: 800.75px;
  height: 460px;
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
  justify-content: space-between;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  z-index: 9999;
`;
const CloseImage = styled.img`
  width: 30px; /* 원하는 가로 크기로 설정 */
  height: 27px; /* 원하는 세로 크기로 설정 */
  margin-right: 30px;
`;
const StyledInput = styled.input`
  width: 243px;
  height: 44px;
  margin-bottom: 10px;
  background-color: #faeee0;
  border: none;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  width: 840.75px;
  display: flex;
  margin-top: 1px;
  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  justify-content: flex-end;
`;

function ProfileFormComponent({ isOpen, setIsOpen }) {
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
  // const [selectedImage, setSelectedImage] = useState(updateUserInfo.picture);
  // const handlePicture = (picture) => {
  //   const file = picture.target.files[0];
  //   setSelectedImage(URL.createObjectURL(file));
  //   setUpdateUserInfo((prevState) => ({
  //     ...prevState,
  //     picture: file.name,
  //   }));
  // };

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
        <CloseButton onClick={handleClickClose}>
          <CloseImage src={XButtonImg} alt="Close" />
        </CloseButton>
        <div style={{ display: "flex" }}>
          <div>
            <Vertical>
              {/* <input type="file" accept="image/*" onChange={handlePicture} /> */}
              <UserImage src={UserPiconImg} alt="Selected" />
            </Vertical>

            {isOpen && (
              <ProfileUpdateCheckDialog
                open={isOpen}
                onClick={handleClickUpdate}
              />
            )}
          </div>
          <div>
            <div>
              <div style={{ display: "flex", marginBottom: "20px" }}>
                <div style={{ marginRight: "20px" }}>
                  <label htmlFor="name">Name</label>
                  <br />
                  <StyledInput
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
                  <StyledInput
                    type="text"
                    id="gender"
                    name="gender"
                    value={updateUserInfo.gender}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div style={{ display: "flex", marginBottom: "20px" }}>
                <div style={{ marginRight: "20px" }}>
                  <label htmlFor="propensity">Propensity</label>
                  <br />
                  <StyledInput
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
                  <StyledInput
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
        </div>
        <Footer>
          <UpdateButton onClick={handleUpdate}>Update</UpdateButton>
        </Footer>
      </ModalContainer>
    </>
  );
}

export default ProfileFormComponent;
