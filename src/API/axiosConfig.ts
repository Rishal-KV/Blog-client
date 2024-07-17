import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://nutrix.fun/blogapp"
})
export default axiosInstance