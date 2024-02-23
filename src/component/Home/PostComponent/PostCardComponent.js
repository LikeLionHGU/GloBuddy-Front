import React, { useState } from "react";
import styled from "styled-components";
import PostCardIconImg from "../../../img/PostCardIcon.png";
import PostCardImg1 from "../../../img/CardImage1.png";
import PostCardImg2 from "../../../img/CardImage2.png";
import PostCardImg3 from "../../../img/CardImage3.png";
import PostCardModal from "./PostCardModal";

const CardImg = styled.img`
  // width: 370px;
  width: 100%;
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
  height: 415px;
  position: relative;
  perspective: 1100px;
  &:hover ${Cards} {
    transform: rotateY(180deg);
  }
  // margin: 4rem;
  margin: 32px;
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 33px;
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
  box-sizing: border-box;
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
  box-sizing: border-box;
`;
const TagBox = styled.button`
  width: 90px;
  height: 38px;
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
  // width: 360px;
  height: 219px;
  background-color: #ffe2c1;
  margin-top: 16px;
  font-size: 18px;
  font-family: Subtitle3;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 3px;
  line-height: 30px;
  text-align: center;
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
  const [postInfo, setPostInfo] = useState("");

  const handleApplyClick = (data) => {
    setPostInfo(data);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const getRandomImageByPostId = (postId) => {
    // 이미지 배열 정의
    const imageUrls = [PostCardImg1, PostCardImg2, PostCardImg3];
    // 포스트 아이디를 기반으로 랜덤한 인덱스 생성
    const randomIndex = parseInt(postId, 10) % imageUrls.length;
    // 해당 인덱스에 해당하는 이미지 URL 반환
    return imageUrls[randomIndex];
  };

  return (
    <div>
      <CardContainer>
        {postData
          .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
          .map((data, index) => (
            <Flip key={index}>
              <Cards>
                <Front>
                  <TitleText>
                    {data.title.length >= 18
                      ? `${data.title.slice(0, 18)}..`
                      : data.title}
                  </TitleText>
                  <CardImg
                    src={getRandomImageByPostId(data.postId)}
                    alt="defalut"
                  />
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
                  <TitleText>
                    {data.title.length >= 19
                      ? `${data.title.slice(0, 19)}..`
                      : data.title}
                  </TitleText>
                  <BackTextBox>{data.content}</BackTextBox>
                  <RequestButton onClick={() => handleApplyClick(data)}>
                    Request
                  </RequestButton>
                </Back>
              </Cards>
            </Flip>
          ))}
      </CardContainer>
      {showPopup && (
        <PostCardModal closePopup={closePopup} postInfo={postInfo} />
      )}
    </div>
  );
}

export default PostCardComponent;
