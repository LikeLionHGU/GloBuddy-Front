import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Horizontal } from "../../styles/StyledComponents";
import { UserTokenState } from "../../store/atom";
import { useSetRecoilState } from "recoil";

import styled from "styled-components";

function LogoutModal({ logout, setLogout }) {
  const navigate = useNavigate();
  const setUserToken = useSetRecoilState(UserTokenState);
  const logoutClickModal = () => {
    setLogout(false);
    setUserToken(null);
    navigate("/");
  };
  const cancleClick = () => {
    setLogout(false);
  };

  return (
    <Fragment>
      <Dialog open={logout} onClose={cancleClick}>
        <DialogTitle style={{ fontFamily: "TheJamsilRegular" }}>
          Logout
        </DialogTitle>
        <DialogContent>
          <Horizontal>
            <DialogContentText>
              <p>Do you want to log out ?</p>
            </DialogContentText>
          </Horizontal>
        </DialogContent>
        <DialogActions>
          <div
            onClick={cancleClick}
            style={{
              fontFamily: "TheJamsilRegular",
              backgroundColor: "#FFE2C1",
              borderRadius: "8px",
              color: "white",
              padding: "5px",
            }}
          >
            cancel
          </div>
          <div
            onClick={logoutClickModal}
            color="warning"
            style={{
              fontFamily: "TheJamsilRegular",

              backgroundColor: "#FFCE96",
              borderRadius: "8px",
              color: "white",
              padding: "5px",
            }}
          >
            logout
          </div>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default LogoutModal;
