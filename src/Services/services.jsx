<<<<<<< HEAD
=======

>>>>>>> Maor'sBranch
import {
  getUserURL,
  loginURL,
  registerURL,
<<<<<<< HEAD
  addItemURL,
} from '../constants/paths';
import { handleErrResponse, post, get } from './axios';
import { getCodeURL } from '../constants/paths';
=======
  addItemURL
} from "../constants/paths";
import { handleErrResponse, post, get } from "./axios";
import { getCodeURL } from "../constants/paths";
>>>>>>> Maor'sBranch

export const loginUser = async (email, password) => {
  try {
    const res = await post(loginURL, { email, password });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const registerUser = async (
  code,
  firstname,
  lastname,
  email,
  password
) => {
  const isadmin = code ? true : false;
  try {
    const res = await post(registerURL, {
      firstname,
      lastname,
      email,
      password,
      isadmin,
    });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getUser = async () => {
  try {
    const res = await get(getUserURL);
    console.log(res.data);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
<<<<<<< HEAD
=======

>>>>>>> Maor'sBranch
export const getCode = async () => {
  try {
    const res = await get(getCodeURL);
    console.log(res.data);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const addItem = async (
  item_name,
  item_description,
  item_rating,
  item_quantity,
  item_pictures,
  isAvailable
) => {
  try {
    const res = await post(addItemURL, {
      item_name,
      item_description,
      item_rating,
      item_quantity,
      item_pictures,
      isAvailable,
    });
<<<<<<< HEAD
=======

>>>>>>> Maor'sBranch

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
