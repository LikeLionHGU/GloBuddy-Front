import { Fragment } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ProfileUpdateCheckDialog({ open, onClick }) {
  return (
    <Fragment>
      <Dialog open={open} onClose={onClick}>
        <DialogTitle style={{ fontFamily: "TheJamsilRegular" }}>
          프로필 정보가 수정되었습니다.
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ fontFamily: "TheJamsilLight" }}>
            수정된 프로필로 버디 신청을 해보세요!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClick}
            color="warning"
            style={{ fontFamily: "TheJamsilRegular" }}
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
