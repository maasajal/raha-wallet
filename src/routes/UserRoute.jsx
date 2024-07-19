import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../providers/AuthProvider";
import useUser from "../hooks/useUser";
import useAuth from "../hooks/useAuth";

const UserRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isUser, isUserPending] = useUser();
  const location = useLocation();
  if (loading || isUserPending) {
    return <progress className="progress w-64"></progress>;
  }
  if (user && isUser) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};
export default UserRoute;
