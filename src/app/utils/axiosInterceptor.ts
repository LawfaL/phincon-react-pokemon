import axios from "axios";

export const axiosInterceptorInstance = axios.create({
  baseURL: "",
});

axiosInterceptorInstance.interceptors.request.use(async (config: any) => ({
  ...config,
  headers: {
    ...config.headers,
    Accept: "application/json",
  },
}));

axiosInterceptorInstance.interceptors.response.use(
  (response: any) => response,
  async (error: any) => {
    if (error.response?.data) {
      return Promise.reject(Error(error.response.data.message));
    }

    return Promise.reject(Error(error.message));
  }
);
