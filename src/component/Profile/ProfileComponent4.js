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

function ProfileComponent4({ userInfo, onNext }) {
  const [needs, setNeeds] = useState(null);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const handleNeeds = (needs) => {
    setNeeds(needs);
    setNextButtonDisabled(false);
  };

  return (
    <>
      <h2>GloBuddy를 통한 당신의 니즈는?</h2>
      <Horizontal>
        <FromButton
          onClick={() => handleNeeds("영어")}
          active={needs === "영어"}
        >
          영어
        </FromButton>
        <FromButton
          onClick={() => handleNeeds("회화")}
          active={needs === "회화"}
        >
          회화
        </FromButton>
      </Horizontal>
      <Box />
      <NextButton
        onClick={() => onNext({ ...userInfo, needs })}
        disabled={nextButtonDisabled}
      >
        다음 4/5
      </NextButton>
    </>
  );
}

export default ProfileComponent4;
