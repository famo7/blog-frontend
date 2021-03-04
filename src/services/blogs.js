import axios from "axios";
const baseUrl = " http://localhost:3000/api";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl + "/blogs");
  return request.then((response) => response.data);
};

const login = (data) => {
  const request = axios.post(baseUrl + "/login", data);
  return request.then((response) => response.data);
};

const create = (data) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = axios.post(baseUrl + "/blogs", data, config);
  return request.then((response) => response.data);
};

export default { getAll, login, create, setToken };
