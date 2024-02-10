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

function ProfileComponent3({ userInfo, onNext }) {
  const [propensity, setPropensity] = useState(null);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const handlePropensity = (propensity) => {
    setPropensity(propensity);
    setNextButtonDisabled(false);
  };

  return (
    <>
      <h2>당신의 성향은?</h2>
      <Horizontal>
        <FromButton
          onClick={() => handlePropensity("밝은")}
          active={propensity === "밝은"}
        >
          밝은
        </FromButton>
        <FromButton
          onClick={() => handlePropensity("어두운")}
          active={propensity === "어두운"}
        >
          어두운
        </FromButton>
      </Horizontal>
      <Box />
      <NextButton
        onClick={() => onNext({ ...userInfo, propensity })}
        disabled={nextButtonDisabled}
      >
        다음 3/5
      </NextButton>
    </>
  );
}

export default ProfileComponent3;
