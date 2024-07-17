import axiosInstance from "./axiosConfig";
import { LoginData, Posts, Signup } from "../interface/user";

export const userApi = {
  login: async (userData: LoginData) => {
    try {
      const response = await axiosInstance.post("/login", userData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  register: async ({ name, email, password }: Signup) => {
    try {
      const response = await axiosInstance.post("/register", {
        name,
        email,
        password,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  post: async (data: Posts) => {
    console.log(data, "datata");

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", data.image);
      formData.append("user", data.user);
      const response = await axiosInstance.post("/post", formData);
      return response;
    } catch (error) {
      throw error;
    }
  },
  fetchPost: async () => {
    try {
      const response = await axiosInstance.get("/post");
      return response;
    } catch (error) {
      throw error;
    }
  },
  save: async (postId: string, userId: string) => {
    try {
      const response = await axiosInstance.post("/save", { postId, userId });
      return response;
    } catch (error) {
      throw error;
    }
  },
  fetchSaved: async (userId: string) => {
    try {
      const response = await axiosInstance.get(`/save?userId=${userId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  fetchSpecificPost: async (postId: string) => {
    try {
      const response = await axiosInstance.get(`/article?id=${postId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  fetchProfile: async (userEmail: string) => {
    try {
      const response = await axiosInstance.get(`/profile?email=${userEmail}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  updateProfile: async (userData: any,email:string) => {
    try {
      const formData = new FormData();
      formData.append('name',userData.name)
      formData.append('about',userData.about)
      formData.append('image',userData.image)
      formData.append('email',email)
      const response = await axiosInstance.post("/profile", formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
