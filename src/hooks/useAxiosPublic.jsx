import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  // baseURL: import.meta.env.VITE_LOCAL_SERVER,
  withCredentials: true,
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
