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
      <h1>Welcome, {userInfo.name}</h1>
      <h2>What is your nationality?</h2>
      <Horizontal>
        <FromButton
          onClick={() => handleType("Korean")}
          active={type === "Korean"}
        >
          Korean
        </FromButton>
        <FromButton
          onClick={() => handleType("International")}
          active={type === "International"}
        >
          International
        </FromButton>
      </Horizontal>
      <Box />
      <NextButton
        onClick={() => onNext({ ...userInfo, type })}
        disabled={nextButtonDisabled}
      >
        Next 1/3
      </NextButton>
    </>
  );
}

export default ProfileComponent1;
