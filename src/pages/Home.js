import { useLocation } from "react-router";
import HomeComponent from "../component/Home/HomeComponent";
import ProfileBtComponent from "../component/Home/ProfileBtComponent";
import MailBtComponent from "../component/Mailbox/MailBtComponent";
import { Horizontal } from "../styles/StyledComponents";
import PostCardComponent from "../component/Home/PostComponent/PostCardComponent";

const postData = [
  {
    name: "이한나",
    type: "국내",
    gender: "여자",
    propensity: "착함",
    needs: "영어",
    picture: "이한나 사진",
    title: "영어 같이 할 사람",
  },
  {
    name: "임여뉴",
    type: "국내",
    gender: "남자",
    propensity: "무서움",
    needs: "영어",
    picture: "임연규 사진",
    title: "영어 공부 같이 할 사람",
  },
  {
    name: "장유진",
    type: "국내",
    gender: "여자",
    propensity: "신남",
    needs: "회화",
    picture: "장유진 사진",
    title: "뭐 같이 할 사람",
  },
  {
    name: "장성재",
    type: "국내",
    gender: "남자",
    propensity: "착함",
    needs: "영어",
    picture: "장성재 사진",
    title: "머닝 같이 할 사람",
  },
  {
    name: "이한나",
    type: "국내",
    gender: "여자",
    propensity: "착함",
    needs: "영어",
    picture: "이한나 사진",
    title: "영어 같이 할 사람",
  },
  {
    name: "이한나",
    type: "국내",
    gender: "여자",
    propensity: "착함",
    needs: "영어",
    picture: "이한나 사진",
    title: "영어 같이 할 사람",
  },
  {
    name: "이한나",
    type: "국내",
    gender: "여자",
    propensity: "착함",
    needs: "영어",
    picture: "이한나 사진",
    title: "영어 같이 할 사람",
  },
];
function Home() {
  const { state } = useLocation(); // navigate state
  // ToDo: post api 연결

  return (
    <>
      <Horizontal>
        <ProfileBtComponent />
        <MailBtComponent />
      </Horizontal>
      <HomeComponent userInfo={state} />
      <PostCardComponent postData={postData} />
    </>
  );
}

export default Home;
