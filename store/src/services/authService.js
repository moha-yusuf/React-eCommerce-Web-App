import jwtDecode from "jwt-decode";
import http from "./httpService";
import config from "../config.json";

// const apiEndpoint = apiUrl + "/auth";
const apiEndpoint = config.apiUrl + "/users";
const tokenKey = "token";

http.setJwt(getJwt());

function createJWT () {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImpvaG4iLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJwYXNzd29yZCI6InBhc3N3b3JkMTIzIn0.aR0yfFIALU5d7oBPbLbv7Z--EWb9sL6IYWBhZv4513I";
};

function findUser(users, username) {
  return users.find(user => user.email === username);
};

export async function login(email, password) {
  const { data } = await http.get(apiEndpoint);
  const user = findUser(data, email);
  console.log(user);
  const jwt = createJWT();
  console.log(jwt);
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

const auth = {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};

export default auth;