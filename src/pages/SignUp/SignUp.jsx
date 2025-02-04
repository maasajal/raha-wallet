import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
} from "@mui/material";
import rahaWalletLogo from "../../assets/rahaWalletLogo.png";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUp } = useAuth();
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      role: "user",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await signUp(data);
      if (res.status === "pending") {
        Swal.fire({
          title: "Register Successfully!",
          text: "Please wait for admin approval. You will get email when your account active.",
          icon: "success",
        });
        reset();
        navigate("/login");
      }
    } catch (error) {
      console.error("Error posting signup data", error);
    }
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    setValue("role", event.target.value, { shouldValidate: true });
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
          Sign Up to Raha Wallet!
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
            id="standard-required"
            label="Name"
            placeholder="Your name..."
            variant="standard"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
          />
          <TextField
            required
            id="standard-mobile-input"
            label="Mobile number"
            type="text"
            placeholder="Your mobile number..."
            variant="standard"
            {...register("mobile", {
              required: "Mobile number is required",
              minLength: {
                value: 11,
                message: "Mobile number must be 11 digits",
              },
              maxLength: {
                value: 11,
                message: "Mobile number must be 11 digits",
              },
            })}
            error={!!errors.mobile}
            helperText={errors.mobile ? errors.mobile.message : ""}
          />
          <TextField
            required
            id="standard-email"
            label="Email"
            type="email"
            placeholder="Your Email"
            variant="standard"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Entered value does not match email format",
              },
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
          <TextField
            required
            id="standard-number"
            label="5 Digit PIN"
            type="password"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            {...register("pin", {
              required: "PIN is required & must be number",
              minLength: {
                value: 5,
                message: "PIN must be 5 digits",
              },
              maxLength: {
                value: 5,
                message: "PIN must be 5 digits",
              },
            })}
            error={!!errors.pin}
            helperText={errors.pin ? errors.pin.message : ""}
          />
          <FormControl
            variant="standard"
            sx={{ width: "100%" }}
            error={!!errors.role}
          >
            <InputLabel id="demo-simple-select-label">Sign Up As User or Agent</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Sign Up As"
              {...register("role", { required: "Role is required" })}
              onChange={handleRoleChange}
            >
              <MenuItem value={"user"}>User</MenuItem>
              <MenuItem value={"agent"}>Agent</MenuItem>
            </Select>
            <FormHelperText>
              {errors.role ? errors.role.message : ""}
            </FormHelperText>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "20ch" }}
          >
            Sign Up
          </Button>
        </Box>
      </div>
      <div className="text-center">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
