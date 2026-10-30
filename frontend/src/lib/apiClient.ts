import axios from "axios";

const axiosClient = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiClient = {
  get<T>(url: string) {
    return axiosClient.get<T>(url);
  },

  post<T>(url: string, data?: unknown) {
    return axiosClient.post<T>(url, data);
  },

  put<T>(url: string, data?: unknown) {
    return axiosClient.put<T>(url, data);
  },

  delete<T>(url: string) {
    return axiosClient.delete<T>(url);
  },
};