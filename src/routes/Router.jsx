import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import RequestToOpenAccount from "../pages/Admin/RequestToOpenAccount";
import SendMoney from "../pages/Users/SendMoney/SendMoney";
import CashOut from "../pages/Users/CashOut/CashOut";
import TransactionManagement from "../pages/Agents/TransactionManagement/TransactionManagement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "/admin/account-open",
        element: <RequestToOpenAccount />,
      },
      {
        path: "/send-money",
        element: <SendMoney />,
      },
      {
        path: "/cash-out",
        element: <CashOut />,
      },
      {
        path: "/transaction-management",
        element: <TransactionManagement />,
      },
    ],
  },
]);
export default router;
