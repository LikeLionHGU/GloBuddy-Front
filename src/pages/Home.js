import { useState, useEffect } from "react";
import ProfileBtComponent from "../component/Home/ProfileBtComponent";
import MailBtComponent from "../component/Mailbox/MailBtComponent";
import PostCardComponent from "../component/Home/PostComponent/PostCardComponent";
import PostCreateBtComponent from "../component/Home/PostCreateComponent/PostCreateBtComponent";
import FilterComponent from "../component/Home/FilterComponent";
import styled from "styled-components";
import axios from "axios";

const NoHorizontal = styled.div`
  //가로 정렬
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 25px;
`;
const Vertical = styled.div`
  //세로 정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function Home() {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    //ToDo: post 글 불러오는 부분 백 500 에러 확인 필요
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/posts`)
      .then(function (response) {
        console.log(response.data.posts);
        setPostData(response.data.posts);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Vertical>
      <NoHorizontal>
        <MailBtComponent />
        <ProfileBtComponent />
      </NoHorizontal>

      <PostCreateBtComponent />
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <PostCardComponent postData={postData} />
        <FilterComponent></FilterComponent>
      </div>
    </Vertical>
  );
}

export default Home;
