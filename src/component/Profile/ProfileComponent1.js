import { useState } from "react";
import styled from "styled-components";
import { Horizontal, Box20, Vertical } from "../../styles/StyledComponents";
import ProfileFlowBGImg from "../../img/ProfileFlowBG.png";

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
const WelcomeText = styled.p`
  font-family: Slogan;
  font-size: 70px;
  margin: 0;
  margin-bottom: 45px;
`;
const QuestionText = styled.p`
  font-family: Subtitle3;
  font-size: 36px;
  margin: 0;
  margin-bottom: 52px;
  margin-top: 45px;
`;
const FromButton = styled.button`
  width: 180px;
  height: 47px;
  border-radius: 8px;
  line-height: 1.5;
  color: black;
  background: ${({ active }) => (active ? "#FFE5C7" : "white")};
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 45px;
  font-family: Body2;
  font-size: 14px;
  border: none;
`;
const OrnageBox = styled.div`
  width: 960px;
  height: 180px;
  background-color: #ffce96;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 40px 45px 40px;
`;
const NextButton = styled.button`
  border-radius: 8px;
  color: black;
  background: ${({ disabled }) => (disabled ? "lightgray" : "#FF9571")};
  margin-left: auto;
  margin-right: 5px;
  height: 45px;
  width: 110px;
  border: none;
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
    <BackgroundContainer>
      <ContentContainer>
        <WelcomeText>Welcome, {userInfo.name}</WelcomeText>
        <OrnageBox>
          <QuestionText>What is your nationality?</QuestionText>
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
        </OrnageBox>
        <Box20 />
        <div
          style={{
            visibility: type ? "visible" : "hidden",
            height: type ? "auto" : 0,
          }}
        >
          {type && (
            <>
              <Vertical>
                <OrnageBox>
                  <QuestionText>What is your gender?</QuestionText>
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
                </OrnageBox>
                <NextButton
                  onClick={() => onNext({ ...userInfo, type, gender })}
                  disabled={nextButtonDisabled}
                >
                  Next
                </NextButton>
              </Vertical>
            </>
          )}
        </div>
        <Box20 />
        <Box20 />
        1/2 page
      </ContentContainer>
    </BackgroundContainer>
  );
}

export default ProfileComponent1;
