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
import CashIn from "../pages/Users/CashIn/CashIn";
import TransactionHistory from "../pages/shared/TransactionHistory/TransactionHistory";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AgentRoute from "./AgentRoute";
import UserRoute from "./UserRoute";
import MobileLayout from "../layouts/MobileNavbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/account-open",
        element: (
          <AdminRoute>
            <RequestToOpenAccount />
          </AdminRoute>
        ),
      },
      {
        path: "/send-money",
        element: (
          <UserRoute>
            <SendMoney />
          </UserRoute>
        ),
      },
      {
        path: "/cash-out",
        element: (
          <UserRoute>
            <CashOut />
          </UserRoute>
        ),
      },
      {
        path: "/cash-in",
        element: (
          <UserRoute>
            <CashIn />,
          </UserRoute>
        ),
      },
      {
        path: "/transaction-management",
        element: (
          <AgentRoute>
            <TransactionManagement />
          </AgentRoute>
        ),
      },
      {
        path: "/transactions",
        element: (
          <PrivateRoute>
            <TransactionHistory />
          </PrivateRoute>
        ),
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <MobileLayout />,
  //   children: [
  //     {
  //       path: "/",
  //       element: (
  //         <PrivateRoute>
  //           <Home />
  //         </PrivateRoute>
  //       ),
  //     },
  //   ],
  // },
]);
export default router;
