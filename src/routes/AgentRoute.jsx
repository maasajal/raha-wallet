import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import useAgent from "../hooks/useAgent";

const AgentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAgent, isAgentPending] = useAgent();
  const location = useLocation();
  if (loading || isAgentPending) {
    return <progress className="progress w-64"></progress>;
  }
  if (user && isAgent) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};
export default AgentRoute;
