import { useState, useEffect } from "react";
import { UserTokenState } from "../../store/atom";
import jwtDecode from "jwt-decode";
import { useRecoilValue } from "recoil";
import { MemberIdState } from "../../store/atom";
import axios from "axios";
import styled from "styled-components";
import { Vertical } from "../../styles/StyledComponents";
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
  /* z-index: 9999; */
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
  const memberId = useRecoilValue(MemberIdState);
  const userToken = useRecoilValue(UserTokenState);
  const decodedToken = jwtDecode(userToken);
  const [gender, setGender] = useState();
  const [mbti, setMbti] = useState();
  const [nation, setNation] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/memberDetail/${memberId}`)
      .then((response) => {
        console.log("개인 정보 디테일 response", response.data);
        setGender(response.data.gender);
        setMbti(response.data.mbti);
        setNation(response.data.nation);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [memberId]);

  const handleClickClose = () => {
    setIsOpen(false);
  };

  const handleGenderChange = (e) => {
    const { value } = e.target;
    setGender(value);
  };

  const handleMbtiChange = (e) => {
    const { value } = e.target;
    setMbti(value);
  };

  const handleNationChange = (e) => {
    const { value } = e.target;
    setNation(value);
  };

  const handleUpdate = () => {
    console.log("수정된 정보들 확인", gender, mbti, nation);
    axios
      .patch(`${process.env.REACT_APP_HOST_URL}/memberDetail/${memberId}`, {
        gender: gender,
        nation: nation,
        mbti: mbti,
      })
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setIsOpen(!isOpen);
    // setCheckIsOpen;
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
                    value={decodedToken.name}
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="gender">Gender</label>
                  <br />
                  <StyledInput
                    type="text"
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={handleGenderChange}
                  />
                </div>
              </div>
              <div style={{ display: "flex", marginBottom: "20px" }}>
                <div style={{ marginRight: "20px" }}>
                  <label htmlFor="mbti">Mbti</label>
                  <br />
                  <StyledInput
                    type="text"
                    id="mbti"
                    name="mbti"
                    value={mbti}
                    onChange={handleMbtiChange}
                  />
                </div>
                <div>
                  <label htmlFor="nation">Nation</label>
                  <br />
                  <StyledInput
                    type="text"
                    id="nation"
                    name="nation"
                    value={nation}
                    onChange={handleNationChange}
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
