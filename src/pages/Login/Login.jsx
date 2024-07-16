import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import rahaWalletLogo from "../../assets/rahaWalletLogo.png";

const Login = () => {
  const [role, setRole] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="text-center space-y-5">
        <a href="/">
          <img
            src={rahaWalletLogo}
            className="logo mx-auto w-40 sm:w-60 mt-5"
            alt="Raha Wallet logo"
          />
        </a>
        <h1 className="text-2xl font-bold font-Montserrat">
          Login to Raha Wallet!
        </h1>
      </div>
      <div className="my-10">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className=""
        >
          <TextField
            required
            id="standard-password-input"
            label="Mobile number"
            type="text"
            placeholder="your mobile number..."
            variant="standard"
            {...register("mobile")}
          />

          <TextField
            required
            id="standard-email"
            label="Email"
            type="email"
            placeholder="Your Email"
            variant="standard"
            {...register("email")}
          />

          <TextField
            required
            id="standard-number"
            label="5 Digit PIN"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            {...register("pin")}
          />
          <button type="submit" className="btn btn-outline btn-info">
            Login
          </button>
        </Box>
      </div>
      <div className="text-center">
        <p>
          Not registered yet?{" "}
          <Link to="/sign-up" className="text-blue-500 font-bold">
            Open new account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
