import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";

const ProfileButton = styled.button`
  border: none;
  background: white;
  cursor: pointer;
`;

function ProfileBtComponent() {
  const navigate = useNavigate();
  const handleNavigateProfile = () => {
    navigate("/GloBuddy/ProfileFrom");
  };
  return (
    <>
      <ProfileButton onClick={handleNavigateProfile}>
        <CgProfile size="30" />
      </ProfileButton>
    </>
  );
}

export default ProfileBtComponent;
