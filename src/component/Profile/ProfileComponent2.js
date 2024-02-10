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

function ProfileComponent2({ userInfo, onNext }) {
  const [gender, setGender] = useState(null);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const handleGender = (gender) => {
    setGender(gender);
    setNextButtonDisabled(false);
  };

  return (
    <>
      <h2>당신의 성별은?</h2>
      <Horizontal>
        <FromButton
          onClick={() => handleGender("남자")}
          active={gender === "남자"}
        >
          남자
        </FromButton>
        <FromButton
          onClick={() => handleGender("여자")}
          active={gender === "여자"}
        >
          여자
        </FromButton>
      </Horizontal>
      <Box />
      <NextButton
        onClick={() => onNext({ ...userInfo, gender })}
        disabled={nextButtonDisabled}
      >
        다음 2/5
      </NextButton>
    </>
  );
}

export default ProfileComponent2;
