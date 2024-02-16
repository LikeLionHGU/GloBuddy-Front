import { useState } from "react";
import styled from "styled-components";
import {
  Horizontal,
  FromButton,
  NextButton,
  Box20,
} from "../../styles/StyledComponents";

const Box = styled.div`
  margin-top: 300px;
`;

function ProfileComponent1({ userInfo, onNext }) {
  const [type, setType] = useState(null);
  const [gender, setGender] = useState(null);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const handleType = (type) => {
    setType(type);
  };
  const handleGender = (gender) => {
    setGender(gender);
    setNextButtonDisabled(false);
  };

  return (
    <>
      <h1>Welcome, {userInfo.name}</h1>
      <h2>What is your nationality?</h2>
      <Horizontal>
        <FromButton
          onClick={() => {
            handleType("Korean");
          }}
          active={type === "Korean"}
        >
          Korean
        </FromButton>
        <FromButton
          onClick={() => {
            handleType("International");
          }}
          active={type === "International"}
        >
          International
        </FromButton>
      </Horizontal>
      <Box20 />
      {type && (
        <>
          <h2>What is your gender?</h2>
          <Horizontal>
            <FromButton
              onClick={() => handleGender("남자")}
              active={gender === "남자"}
            >
              Male
            </FromButton>
            <FromButton
              onClick={() => handleGender("여자")}
              active={gender === "여자"}
            >
              Female
            </FromButton>
          </Horizontal>
          <Box />
          <NextButton
            onClick={() => onNext({ ...userInfo, type, gender })}
            disabled={nextButtonDisabled}
          >
            Next 1/2
          </NextButton>
        </>
      )}
    </>
  );
}

export default ProfileComponent1;
