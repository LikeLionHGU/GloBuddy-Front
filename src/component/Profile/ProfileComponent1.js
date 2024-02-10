import { useState } from "react";
import styled from "styled-components";
import {
  Horizontal,
  FromButton,
  NextButton,
} from "../../styles/StyledComponents";

const Box = styled.div`
  margin-top: 300px;
`;

function ProfileComponent1({ userInfo, onNext }) {
  const [type, setType] = useState(null);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const handleType = (type) => {
    setType(type);
    setNextButtonDisabled(false);
  };

  return (
    <>
      <h1>Welcome, {userInfo.name} 님!</h1>
      <h2>당신은 어떤 학생입니까?</h2>
      <Horizontal>
        <FromButton
          onClick={() => handleType("국제 학생")}
          active={type === "국제 학생"}
        >
          국제 학생
        </FromButton>
        <FromButton
          onClick={() => handleType("국내 학생")}
          active={type === "국내 학생"}
        >
          국내 학생
        </FromButton>
      </Horizontal>
      <Box />
      <NextButton
        onClick={() => onNext({ ...userInfo, type })}
        disabled={nextButtonDisabled}
      >
        다음 1/5
      </NextButton>
    </>
  );
}

export default ProfileComponent1;
