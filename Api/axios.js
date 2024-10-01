import axios from "axios";
import { baseURI } from "./Api";
import Cookie from "cookie-universal";
const cookie = Cookie();
const token = cookie.get("e-commerce");
export const Axios = axios.create({
  baseURL:  baseURI ,
  headers: {
    Authorization: "Bearer " + token,
  },
});
