import Cookie from "universal-cookie";

export default function getAuthToken() {
  const cookie = new Cookie();
  const token = localStorage.getItem("token");
//   console.log("IN AUTH", "Cookies: ", cookie.get('jwt'), "Token: ", token);
  return { cookie: cookie, token: token };
}
