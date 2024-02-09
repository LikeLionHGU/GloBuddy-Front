import { UserTokenState } from "../../store/atom";
import { useRecoilValue } from "recoil";
import jwtDecode from "jwt-decode";

const data = {
  name: "",
  email: "",
  picture: "",
};

function HomeComponent() {
  const userToken = useRecoilValue(UserTokenState);
  const decodedToken = jwtDecode(userToken);
  data.name = decodedToken.name;
  data.email = decodedToken.email;
  data.picture = decodedToken.picture;
  console.log(decodedToken);
  return (
    <>
      GloBuddy Let's Go~!
      <h1>Welcome, {data.name}</h1>
      <p>Email 정보 : {data.email}</p>
      <img src={data.picture} alt="user profile" />
    </>
  );
}

export default HomeComponent;
