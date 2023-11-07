import axios from "axios";

let ApiUrl = "http://localhost:5000";

const authService = {
  addUser(data) {
    return axios.post(ApiUrl + `/users`, data);
  },
};

export default authService;
