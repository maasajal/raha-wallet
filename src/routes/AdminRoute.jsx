import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminPending] = useAdmin();
  const location = useLocation();
  if (loading || isAdminPending) {
    return <progress className="progress w-64"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};
export default AdminRoute;
