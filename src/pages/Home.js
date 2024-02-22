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
  const [isOpen, setIsOpen] = useState(false);
  const [postData, setPostData] = useState([]);
  const createBtClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/posts`)
      .then(function (response) {
        console.log(response.data.posts);
        setPostData(response.data.posts);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [isOpen]);

  return (
    <Vertical>
      <NoHorizontal>
        <MailBtComponent />
        <ProfileBtComponent />
      </NoHorizontal>

      <PostCreateBtComponent
        createBtClick={createBtClick}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div style={{ flex: 1 }}>
          <FilterComponent />
        </div>
        <div style={{ flex: 4.5 }}>
          <PostCardComponent postData={postData} />
        </div>
      </div>
    </Vertical>
  );
}

export default Home;
