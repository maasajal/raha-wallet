import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: import.meta.env.VITE_SERVER,
  baseURL: import.meta.env.VITE_LOCAL_SERVER || "https://raha-wallet-server.vercel.app",
  withCredentials: true,
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
