import {
  getUserURL,
  loginURL,
  registerURL,
  addItemURL,
  getItemURL,
  getItemsURL,
  getUserCartURL,
  updateItemURL,
} from '../constants/paths';
import { handleErrResponse, post, get, put } from './axios';
import { getCodeURL } from '../constants/paths';

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
  item_price,
  item_rating,
  item_quantity,
  isAvailable,
  item_pictures
) => {
  try {
    const res = await post(addItemURL, {
      item_name,
      item_description,
      item_price,
      item_rating,
      item_quantity,
      isAvailable,
      item_pictures,
    });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getItemById = async (id) => {
  try {
    const res = await get(getItemURL + id, { id });
    console.log('requesting item');
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getItems = async () => {
  try {
    const res = await get(getItemsURL);
    console.log(res.data);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const updateItemById = async (id, item) => {
  try {
    const res = await put(updateItemURL + id, { id, item });
    console.log('Update Item - ' + res.data);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getCartById = async (id) => {
  try {
    const res = await get(getUserCartURL + id, { id });
    //console.log(res.data);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
