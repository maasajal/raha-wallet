import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Alert,
} from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TransactionManagement = () => {
  const { token } = useAuth(); // Assuming useAuth hook provides the token
  const axiosSecure = useAxiosSecure();
  const [message, setMessage] = useState("");

  const { data: transactions = [], refetch } = useQuery({
    queryKey: ["transaction-management"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        "/transaction-management",
        {
          params: { status: "pending" },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
  });
  console.log(transactions.length);
  const approveCashOut = async (transactionId) => {
    try {
      const response = await axiosSecure.post(
        `/approve-cash-out/${transactionId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data);
      refetch();
    } catch (error) {
      console.error("Error approving cash-out:", error);
      setMessage("Error approving cash-out");
    }
  };

  const approveCashIn = async (transactionId) => {
    try {
      const response = await axiosSecure.post(
        `/approve-cash-in/${transactionId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data);
      refetch();
    } catch (error) {
      console.error("Error approving cash-in:", error);
      setMessage("Error approving cash-in");
    }
  };
  return (
    <div className="text-center py-10">
      <Typography variant="h4" component="h1">
        Transaction Management
      </Typography>
      {message && <Alert severity="info">{message}</Alert>}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>User ID and Agent ID</th>
              <th>Transaction ID</th>
              <th>Type: Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              <>
                {transactions.map((transaction, index) => (
                  <tr key={transaction?._id} className="hover">
                    <th>{index + 1}</th>
                    <td>
                      <div className="font-bold">{transaction?.user}</div>
                      <div className="font-bold">{transaction?.agent}</div>
                    </td>
                    <td>
                      <div className="font-bold">{transaction?._id}</div>
                    </td>
                    <td>
                      {transaction?.type}: {transaction?.amount}
                    </td>
                    <td>{transaction?.status}</td>
                    <td>
                      {transaction.status === "pending" && transaction.type === "cash-out" ? (
                        <button
                          onClick={() => approveCashOut(transaction._id)}
                          className="btn btn-outline"
                        >
                          Approve
                        </button>
                      ) : (
                        <button
                          onClick={() => approveCashIn(transaction._id)}
                          className="btn btn-outline"
                        >
                          Approve
                        </button>
                      )}
                    </td>
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
    </div>
  );
};

export default TransactionManagement;
