import React, { useState } from "react";
import styled from "styled-components";
import PostCardIconImg from "../../../img/PostCardIcon.png";
import PostCardImg from "../../../img/PostCard.png";
import PostCardModal from "./PostCardModal";

const CardImg = styled.img`
  width: 370px;
  height: 158px;
  margin-left: -5px;
  margin-top: 10px;
  margin-bottom: 15px;
`;
const TitleText = styled.p`
  font-size: 26px;
  margin: 0;
  font-family: Body2; // Global Style 적용해줘서 이렇게 사용 가능
`;
const Font = styled.p`
  font-size: 15px;
  /* margin: 0; */
  font-family: Body2; // Global Style 적용해줘서 이렇게 사용 가능
`;
const Font2 = styled.p`
  font-size: 15px;
  margin-left: 70px;
  font-family: Body2; // Global Style 적용해줘서 이렇게 사용 가능
`;
const Cards = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
`;
const Flip = styled.div`
  width: 360px;
  height: 352px;
  position: relative;

  perspective: 1100px;
  &:hover ${Cards} {
    transform: rotateY(180deg);
  }
  margin: 4rem;
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Horizontal = styled.div`
  //가로 정렬
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;
const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  backface-visibility: hidden;
  background: white;
  border: 1px solid black;
  padding: 20px;
`;
const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: white;
  border-radius: 15px;
  border: 1px solid black;
  transform: rotateY(180deg);
  padding: 20px;
`;
const TagBox = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 20px;
  border: none;
  background: ${({ color }) => color};
  margin-left: 10px;
  font-size: 13px;
`;
const IconImg = styled.img`
  width: 13px;
  height: 12px;
  margin-left: 5px;
`;
const BackTextBox = styled.div`
  width: 360px;
  height: 219px;
  background-color: #ffe2c1;
  margin-top: 16px;
  font-size: 18px;
  font-family: Subtitle3;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 3px;
`;
const RequestButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: #ffa640;
  border: none;
  margin-top: 25px;
  margin-left: 33%;
  font-size: 20px;
  font-family: Subtitle2;
  cursor: pointer;
`;

function PostCardComponent({ postData }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleApplyClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <CardContainer>
        {postData.map((data, index) => (
          <Flip key={index}>
            {" "}
            <Cards>
              <Front>
                <TitleText>TITLE: {data.title}</TitleText>
                <CardImg src={PostCardImg} alt="defalut" />
                <Horizontal>
                  <Font>Name: {data.name}</Font>
                  <Font2>
                    | {data.gender} | {data.nation}
                  </Font2>
                  <IconImg src={PostCardIconImg} alt="icon" />
                </Horizontal>
                <Horizontal>
                  <Font>MBTI:</Font>
                  <TagBox color={data.color}> {data.mbti}</TagBox>
                </Horizontal>
                <Horizontal>
                  <Font>Needs: </Font>
                  <TagBox color={data.color}> {data.needs} </TagBox>
                </Horizontal>
              </Front>
              <Back>
                <TitleText>TITLE: {data.title}</TitleText>
                <BackTextBox>{data.content}</BackTextBox>
                <RequestButton onClick={handleApplyClick}>
                  Request
                </RequestButton>
              </Back>
            </Cards>
          </Flip>
        ))}
      </CardContainer>
      {showPopup && <PostCardModal closePopup={closePopup} />}
    </div>
  );
}

export default PostCardComponent;
