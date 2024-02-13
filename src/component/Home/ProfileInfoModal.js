import React, { useState } from "react";
import styled from "styled-components";
import { Horizontal, Box20 } from "../../styles/StyledComponents";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalDiv = styled.div`
  width: 600px;
  height: 700px;
  background: pink;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
const ModalDiv2 = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
`;
const CancelBT = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;
const Text = styled.p`
  font-size: 16px;
`;
const InputText = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const ProfileBT = styled.button`
  position: relative;
  z-index: 1;
  font-size: 20px;
`;
const SaveBT = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: white;
  color: gray;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  font-weight: 20px;
`;

const profileData = {
  name: "이한나",
  type: "국내 더미",
  gender: "여자 더미",
  propensity: "차분함 더미",
  needs: "친구 더미",
  picture: "더미 사진 링크",
};

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Div>
      <ProfileBT onClick={openModal}>프로필 확인</ProfileBT>
      {isModalOpen && (
        <ModalDiv>
          <ModalDiv2>
            <CancelBT onClick={closeModal}>X</CancelBT>
            <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>프로필</h1>
            <Horizontal>
              <Text>국내/국제</Text>
              <InputText type="text" value={profileData.type} />
            </Horizontal>
            <Horizontal>
              <Text>성별</Text>
              <InputText type="text" placeholder="내용을 입력하세요." />
            </Horizontal>
            <Horizontal>
              <Text>성격</Text>
              <InputText type="text" placeholder="내용을 입력하세요." />
            </Horizontal>

            <Text>니즈</Text>
            <InputText type="text" placeholder="내용을 입력하세요." />
            <Box20 />
            <InputText type="text" placeholder="내용을 입력하세요." />
            <Box20 />
            <InputText type="text" placeholder="내용을 입력하세요." />
            <SaveBT>저장</SaveBT>
          </ModalDiv2>
        </ModalDiv>
      )}
    </Div>
  );
}

export default Modal;
