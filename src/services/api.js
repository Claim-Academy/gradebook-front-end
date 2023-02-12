import ky from "ky";

const BASE_URL = "http://localhost:3000/api";

export default {
  loginOrRegister(credentials, isRegistering) {
    return ky
      .post(`${BASE_URL}/users/${isRegistering ? "create" : "login"}`, {
        json: credentials,
      })
      .json();
  },
  getStudents() {
    return ky.get(`${BASE_URL}/students`).json();
  },
  createStudent(data) {
    return ky.post(`${BASE_URL}/students`, { json: data }).json();
  },
};
