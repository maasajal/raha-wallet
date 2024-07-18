import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Typography,
} from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TransactionHistory = () => {
  const { user, token } = useAuth();
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
    enabled: !!user,
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error fetching transactions</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Transaction History
      </Typography>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>User ID and Agent ID</th>
              <th>Transaction ID</th>
              <th>Type: Amount</th>
              <th>Request & Approve Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              <>
                {transactions.map((transaction, index) => (
                  <tr key={transaction?._id} className="hover">
                    <th>{index + 1}</th>
                    <td>
                      <div className="font-bold">{transaction?.user || transaction?.sender}</div>
                      <div className="font-bold">{transaction?.agent || transaction?.recipient}</div>
                    </td>
                    <td>
                      <div className="font-bold">{transaction?._id}</div>
                    </td>
                    <td>
                      {transaction?.type}: {transaction?.amount}
                    </td>
                    <td>
                      {transaction?.date}
                      <br />
                      {transaction?.approvedAt}
                    </td>
                    <td>{transaction?.status}</td>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td className="text-center">No transaction? Request found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Box>
  );
};

export default TransactionHistory;
