import axios from "axios";
import { getJwtKey } from "../constants/helpers";

// eslint-disable-next-line no-undef
if (process.env.REACT_APP_ENV === "LOCAL") {
  axios.defaults.baseURL = "http://localhost:4000";
} else {
  axios.defaults.baseURL = "";
}

export const handleErrResponse = (error) => {
  if (error.response) {
    const resp = {
      code: error.response.status,
      msg: error.response.data
    };
    return resp;
  }
  if (error.request) {
    const resp = { code: -1, msg: "No Response Recived" };
    return resp;
  }
  const resp = { code: -1, msg: error.message };
  return resp;
};

export const get = (url, headers) =>
  axios.get(url, {
    headers: {
      ...headers,
      token: `Bearer ${getJwtKey()}`
    },
    withCredentials: false
  });

export const post = (url, data, headers) =>
  axios.post(url, data, {
    headers: {
      ...headers,
      token: `Bearer ${getJwtKey()}`
    },
    withCredentials: false
  });

export const put = (url, data, headers) =>
  axios.put(url, data, {
    headers: {
      ...headers,
      token: `Bearer ${getJwtKey()}`
    },
    withCredentials: false
  });

export const del = (url, data, headers) =>
  axios.delete(url, data, {
    headers: {
      ...headers,
      token: `Bearer ${getJwtKey()}`
    },
    withCredentials: false
  });
