import {
  getUserURL,
  loginURL,
  registerURL,
  addItemURL,
  getItemURL,
  getItemsURL,
  getUserCartURL,
  updateItemURL,
  updateCartURL,
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

export const addItemToCart = async (id, inItem) => {
  const item = [{ item_id: inItem._id, item_quantity: 1 }];
  let items;
  let cart_id;
  console.log('1.Added item -');
  console.log(item);
  try {
    const res = await get(getUserCartURL + id, { id });
    //console.log(res.data);
    if (res.status == 200) {
      items = [...res.data.items, { item_id: inItem._id, quantity: 1 }];
      cart_id = res.data._id;
    }
  } catch (err) {
    return handleErrResponse(err);
  }
  console.log('2.The new cart -');
  console.log(items);
  try {
    const res = await put(updateCartURL + cart_id, {
      customer_id: id,
      items: items,
    });
    console.log(res);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
