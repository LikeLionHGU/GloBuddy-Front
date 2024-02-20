import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosMail } from "react-icons/io";
import LogoImg from "../img/Logo.png";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 117px;
  background: pink;
  z-index: 999;
`;
function MainHeader() {
  const navigate = useNavigate();
  const handleNavigateAlarm = () => {};
  return <HeaderContainer></HeaderContainer>;
}

export default MainHeader;
