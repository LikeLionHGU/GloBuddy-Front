import { UserTokenState } from "../../store/atom";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoutButton = styled.button`
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: black;
  background: white;
`;

function HomeComponent({ userInfo }) {
  const setUserToken = useSetRecoilState(UserTokenState);

  const navigate = useNavigate();
  const handleLogout = () => {
    setUserToken(null);
    navigate("/");
  };
  return (
    <>
      GloBuddy Let's Go~!
      <h3>{userInfo.name}</h3>
      <h3>{userInfo.type}</h3>
      <h3>{userInfo.gender}</h3>
      <h3>{userInfo.propensity}</h3>
      <h3>{userInfo.needs}</h3>
      <h3>{userInfo.picture}</h3>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </>
  );
}

export default HomeComponent;
