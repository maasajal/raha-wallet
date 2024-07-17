import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CashOut = () => {
  const { token } = useAuth(); // Assuming useAuth hook provides the token
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.post(
        "/cash-out",
        {
          agentMobile: data.agentMobile,
          amount: parseInt(data.amount, 10),
          pin: data.pin,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response?.data || "Error during cash-out");
    }
  };

  return (
    <div>
      <div className="text-center space-y-5">
        <Typography variant="h4" component="h1">
          Cash Out
        </Typography>
        {message && <Alert severity="info">{message}</Alert>}
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
        >
          <TextField
            required
            id="standard-agentMobile"
            label="Agent Mobile"
            type="text"
            placeholder="Agent's mobile number"
            variant="standard"
            {...register("agentMobile", {
              required: "Agent mobile number is required",
            })}
            error={!!errors.agentMobile}
            helperText={errors.agentMobile && errors.agentMobile.message}
          />

          <TextField
            required
            id="standard-amount"
            label="Amount"
            type="number"
            placeholder="Amount to cash out"
            variant="standard"
            {...register("amount", {
              required: "Amount is required",
              min: { value: 50, message: "Minimum amount is 50 Taka" },
            })}
            error={!!errors.amount}
            helperText={errors.amount && errors.amount.message}
          />

          <TextField
            required
            id="standard-pin"
            label="PIN"
            type="password"
            placeholder="Your PIN"
            variant="standard"
            {...register("pin", { required: "PIN is required" })}
            error={!!errors.pin}
            helperText={errors.pin && errors.pin.message}
          />
          <Button type="submit" variant="outlined" color="info">
            Cash Out
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default CashOut;
