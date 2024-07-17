import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Backdrop, Box, Modal, Fade, Typography, Button } from "@mui/material";
import rahaWalletLogo from "../../assets/rahaWalletLogo.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Profile = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="my-10 shadow-xl">
      <div className="card image-full z-0">
        <figure>
          <img src={rahaWalletLogo} alt="raha wallet" className="py-10" />
        </figure>
        <div className="card-body items-center justify-center text-white">
          <h2 className="card-title text-5xl font-bold">{user?.name}</h2>
          <div className="my-4 flex justify-between gap-20">
            <p className="text-lg">
              <span className="font-semibold">Role:</span> {user?.role}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Account Status:</span>{" "}
              {user?.status}
            </p>
          </div>
          <div className="my-4 space-y-5">
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {user?.email}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Mobile:</span> {user?.mobile}
            </p>
          </div>
          <div className="card-actions justify-end">
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Check Balance
            </Button>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Your current account balance
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <p className="text-lg">
                <span className="font-semibold">Balance:</span> Taka{" "}
                {user?.balance}
              </p>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Profile;
