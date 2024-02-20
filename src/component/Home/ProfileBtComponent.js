import * as React from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutDialog from "./LogoutDialog";

import UserpicImg from "../../img/Userpic.png";

function ProfileBtComponent() {
  const navigate = useNavigate();

  const [logout, setLogout] = React.useState(false);
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
  const handleNavigateMyPost = () => {
    navigate("/GloBuddy/MyPost");
  };
  const handleLogout = () => {
    setLogout(true);
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          src={UserpicImg}
          alt="사용자버튼"
          style={{
            width: "69.32px",
            height: "67.63px",
            marginLeft: "130.18",
            marginTop: "25.88",
          }}
        />
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
        <MenuItem onClick={handleNavigateMyPost}>내 게시물</MenuItem>
        <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
      </Menu>

      {logout && <LogoutDialog logout={logout} setLogout={setLogout} />}
    </div>
  );
}

export default ProfileBtComponent;
