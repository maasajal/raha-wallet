import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_LOCAL_SERVER,
  headers: {
    'Content-Type': 'application/json',
  },
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
