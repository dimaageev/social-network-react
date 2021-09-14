import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "bd583fa8-9d9e-444d-8f56-2b18cb0c0dfe",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  unfollow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  authorize() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
