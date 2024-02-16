import { useState } from "react";
import styled from "styled-components";
import ProfileFlowBGImg from "../../img/ProfileFlowBG.png";
import { Box20 } from "../../styles/StyledComponents";

const BackgroundContainer = styled.div`
  background-image: url(${ProfileFlowBGImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const OrnageBox = styled.div`
  width: 960px;
  height: 360px;
  background-color: #ffce96;
  border-radius: 40px;
  flex-wrap: wrap; /* 넘치면 줄바꿈 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 150px 0px 115px 0px;
`;
const QuestionText = styled.p`
  font-family: Subtitle3;
  font-size: 27px;
  margin: 0;
  margin-bottom: 50px;
  margin-top: 45px;
`;
const BoxDiv = styled.div`
  flex-wrap: wrap; /* 넘치면 줄바꿈 */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FromButton = styled.button`
  width: 105px;
  height: 52px;
  border-radius: 8px;
  line-height: 1.5;
  color: black;
  background: ${({ active }) => (active ? "#FFE5C7" : "white")};
  margin-right: 6px;
  margin-bottom: 45px;
  font-family: Body2;
  font-size: 13.5px;
  border: none;
`;
const NextButton = styled.button`
  border-radius: 8px;
  color: black;
  background: ${({ disabled }) => (disabled ? "lightgray" : "#FF9571")};
  margin-left: auto;
  margin-right: 150px;
  height: 47px;
  width: 150px;
  border: none;
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
    <BackgroundContainer>
      <ContentContainer>
        <OrnageBox>
          <QuestionText>What is your MBTI?</QuestionText>
          <BoxDiv>
            {mbtiData.map((data, index) => (
              <FromButton
                key={index}
                onClick={() => handlePropensity(data)}
                active={propensity === data}
              >
                {data}
              </FromButton>
            ))}
          </BoxDiv>
        </OrnageBox>
        <NextButton
          onClick={() => onNext({ ...userInfo, propensity })}
          disabled={nextButtonDisabled}
        >
          Go GloB
        </NextButton>
        <Box20 />
        <Box20 />
        2/2 page
      </ContentContainer>
    </BackgroundContainer>
  );
}

export default ProfileComponent3;
