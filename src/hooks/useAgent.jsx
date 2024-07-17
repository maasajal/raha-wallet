import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";

const useAgent = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAgent, isPending: isAgentPending } = useQuery({
    queryKey: [user?.email, "isAgent"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/agent/${user.email}`);
      return res.data?.agent;
    },
  });
  return [isAgent, isAgentPending];
};
export default useAgent;
