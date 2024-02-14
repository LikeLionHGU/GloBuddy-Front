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
          로그아웃
        </DialogTitle>
        <DialogContent>
          <Horizontal>
            <DialogContentText>
              <p>로그아웃하시겠습니까?</p>
            </DialogContentText>
          </Horizontal>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={cancleClick}
            color="secondary"
            style={{ fontFamily: "TheJamsilRegular" }}
          >
            취소
          </Button>
          <Button
            onClick={logoutClickModal}
            color="warning"
            style={{ fontFamily: "TheJamsilRegular" }}
          >
            로그아웃
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default LogoutModal;
