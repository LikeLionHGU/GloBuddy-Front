import { useState, useEffect } from "react";
import ProfileBtComponent from "../component/Home/ProfileBtComponent";
import MailBtComponent from "../component/Mailbox/MailBtComponent";
import { Horizontal, Vertical } from "../styles/StyledComponents";
import PostCardComponent from "../component/Home/PostComponent/PostCardComponent";
import PostCreateBtComponent from "../component/Home/PostCreateComponent/PostCreateBtComponent";
import FilterComponent from "../component/Home/FilterComponent";
import axios from "axios";

function Home() {
  const [postData, setPostData] = useState([]);
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
  }, []);

  return (
    <Vertical>
      <Horizontal>
        <ProfileBtComponent />
        <MailBtComponent />
      </Horizontal>

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
