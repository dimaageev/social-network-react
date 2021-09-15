import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "a4135ca0-9313-4226-9837-371fd1df49cb",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  unfollow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  authorize() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};
