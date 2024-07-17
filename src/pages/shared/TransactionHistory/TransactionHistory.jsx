import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TransactionHistory = () => {
  const { token } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: transactions = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const res = await axiosSecure.get("/transactions", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error fetching transactions</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Transaction History
      </Typography>
      {transactions.length > 0 ? (
        <Paper elevation={3} sx={{ maxHeight: 400, overflow: "auto" }}>
          <List>
            {transactions.map((transaction) => (
              <ListItem key={transaction._id}>
                <ListItemText
                  primary={`${transaction.type} - Taka ${transaction.amount}`}
                  secondary={`Date: ${new Date(
                    transaction.date
                  ).toLocaleString()} - Status: ${transaction.status}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : (
        <Typography>No transactions found</Typography>
      )}
    </Box>
  );
};

export default TransactionHistory;
