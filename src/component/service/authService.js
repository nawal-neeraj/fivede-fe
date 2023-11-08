import axios from "axios";

let ApiUrl = "http://localhost:5000";

const authService = {
  addUser(data) {
    return axios.post(ApiUrl + `/users`, data);
  },
  addMoment(data) {
    return axios.post(ApiUrl + `/add/moment`, data);
  },
};

export default authService;
