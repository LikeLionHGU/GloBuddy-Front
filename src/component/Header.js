import ProfileBtComponent from "../component/Home/ProfileBtComponent";
import MailBtComponent from "../component/Mailbox/MailBtComponent";
import styled from "styled-components";

const NoHorizontal = styled.div`
  //가로 정렬
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 25px;
`;

function Header() {
  return (
    <NoHorizontal>
      <MailBtComponent />
      <ProfileBtComponent />
    </NoHorizontal>
  );
}

export default Header;
