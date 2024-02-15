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

const mbtiData = [
  "ESTP",
  "ESTJ",
  "ENFJ",
  "ENTJ",
  "ISTP",
  "ISTJ",
  "INFJ",
  "INTJ",
  "ESFP",
  "ESFJ",
  "ENFP",
  "ENTP",
  "ISFP",
  "ISFJ",
  "INFP",
  "INTP",
];

function ProfileComponent3({ userInfo, onNext }) {
  const [propensity, setPropensity] = useState(null);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const handlePropensity = (propensity) => {
    setPropensity(propensity);
    setNextButtonDisabled(false);
  };

  return (
    <>
      <h2>Your MBTI</h2>
      <Horizontal>
        {mbtiData.map((data, index) => (
          <FromButton
            key={index}
            onClick={() => handlePropensity(data)}
            active={propensity === data}
          >
            {data}
          </FromButton>
        ))}
      </Horizontal>
      <Box />
      <NextButton
        onClick={() => onNext({ ...userInfo, propensity })}
        disabled={nextButtonDisabled}
      >
        Go GloB 3/3
      </NextButton>
    </>
  );
}

export default ProfileComponent3;
