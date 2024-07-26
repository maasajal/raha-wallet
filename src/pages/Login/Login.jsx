import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import rahaWalletLogo from "../../assets/rahaWalletLogo.png";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await logIn(data);
      navigate("/");
    } catch (error) {
      console.log("error login", error);
    }
  };

  return (
    <div>
      <div className="text-center space-y-5">
        <img
          src={rahaWalletLogo}
          className="logo mx-auto w-40 sm:w-60 mt-5"
          alt="Raha Wallet logo"
        />
        <h1 className="text-2xl font-bold font-Montserrat">
          Login to Raha Wallet!
        </h1>
      </div>
      <div className="my-10 max-w-xl mx-auto">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 p-10 bg-[#faf5ee] rounded-xl"
        >
          <TextField
            required
            id="standard-identifier-input"
            label="Email or Mobile Number"
            type="text"
            placeholder="Your email or mobile number"
            variant="standard"
            {...register("identifier", {
              required: "Email or mobile number is required",
            })}
            error={!!errors.identifier}
            helperText={errors.identifier && errors.identifier.message}
          />

          <TextField
            required
            id="standard-pin"
            label="5 Digit PIN"
            type="password"
            placeholder="Your 5 digit PIN"
            variant="standard"
            {...register("pin", { required: "PIN is required" })}
            error={!!errors.pin}
            helperText={errors.pin && errors.pin.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="info"
            sx={{ width: "20ch" }}
          >
            Login
          </Button>
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
