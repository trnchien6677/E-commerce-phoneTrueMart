import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
  registeradmin(username, email, password) {
    return axios.post(API_URL + "signupadmin", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  getUser(userId) {
    return axios.get(API_URL + "profile/" + userId);
  }
  getAllUser() {
    return axios.get(API_URL + "listuser");
  }
  updatePassword(user,userid,passw)
  {
      return axios.put(API_URL +'change-password/'+userid+'/'+passw,user);
  }

  deleteUser(userId){
    return axios.delete(API_URL + 'deleteuser/' + userId);
}
updateUser(user, userId){
  return axios.put(API_URL + 'changeuser/' + userId, user);
}
}

export default new AuthService();
