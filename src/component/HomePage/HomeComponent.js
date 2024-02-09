import { UserTokenState } from "../../store/atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import styled from "styled-components";

const LogoutButton = styled.button`
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: black;
  background: white;
`;

const data = {
  name: "",
  email: "",
  picture: "",
};

function HomeComponent() {
  const [userToken, setUserToken] = useRecoilState(UserTokenState);
  const decodedToken = jwtDecode(userToken);
  data.name = decodedToken.name;
  data.email = decodedToken.email;
  data.picture = decodedToken.picture;
  // console.log(decodedToken);

  const navigate = useNavigate();
  const handleLogout = () => {
    setUserToken(null);
    navigate("/");
  };
  return (
    <>
      GloBuddy Let's Go~!
      <h1>Welcome, {data.name}</h1>
      <p>Email 정보 : {data.email}</p>
      <img src={data.picture} alt="user profile" />
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </>
  );
}

export default HomeComponent;
