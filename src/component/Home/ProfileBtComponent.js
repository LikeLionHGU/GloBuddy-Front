import * as React from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UserTokenState } from "../../store/atom";
import { useSetRecoilState } from "recoil";

function ProfileBtComponent() {
  const setUserToken = useSetRecoilState(UserTokenState);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigateProfile = () => {
    navigate("/GloBuddy/ProfileFrom");
  };
  const handleLogout = () => {
    setUserToken(null);
    navigate("/");
  };
  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <CgProfile size="30" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleNavigateProfile}>프로필 수정</MenuItem>
        <MenuItem onClick={handleClose}>내 게시물</MenuItem>
        <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
      </Menu>
    </>
  );
}

export default ProfileBtComponent;
