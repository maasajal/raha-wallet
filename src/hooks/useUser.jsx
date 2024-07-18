import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";

const useUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isUser, isPending: isUserPending } = useQuery({
    queryKey: [user?.email, "isUser"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user.email}`);
      return res.data?.user;
    },
  });
  return [isUser, isUserPending];
};
export default useUser;
