import {
  getUserURL,
  loginURL,
  registerURL,
  addItemURL,
  getItemURL,
  getUserByEmailURL,
  getItemsURL,
  getUserCartURL,
  updateItemURL,
  resetPasswordlURL,
  updateCartURL,
  addAddressURL,
  getAddressURL,
  updateUserlURL,
  updateAddressURL,
  addCreditURL,
  getCreditURL,
  updateCreditURL
} from "../constants/paths";
import { handleErrResponse, post, get, put } from "./axios";
import { getCodeURL } from "../constants/paths";

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
      isadmin
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

export const getUserByEmail = async (email) => {
  try {
    const res = await get(getUserByEmailURL + email, { email });
    console.log(res.data);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const resetPassword = async (userID, newPassword) => {
  try {
    const res = await put(resetPasswordlURL, {
      id: userID,
      password: newPassword
    });
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
      item_pictures
    });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getItemById = async (id) => {
  try {
    const res = await get(getItemURL + id, { id });
    console.log("requesting item");
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
    console.log("Update Item - " + res.data);
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
  console.log("1.Added item -");
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
  console.log("2.The new cart -");
  console.log(items);
  try {
    const res = await put(updateCartURL + cart_id, {
      customer_id: id,
      items: items
    });
    console.log(res);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const addAddress = async (customer_id, country, city, address) => {
  try {
    const res = await post(addAddressURL, {
      customer_id,
      country,
      city,
      address
    });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const updateAddress = async (customer_id, country, city, address) => {
  console.log("customer id ", customer_id);
  try {
    const res = await put(updateAddressURL, {
      customer_id,
      country,
      city,
      address
    });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const getUserAddress = async (id) => {
  try {
    const res = await get(getAddressURL + id, { id });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const updateUserInfo = async (id, fname, lname, email, password) => {
  try {
    const res = await put(updateUserlURL, {
      id: id,
      first_name: fname,
      last_name: lname,
      email: email,
      password: password
    });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const addCreditCard = async (
  customer_id,
  name,
  card_number,
  date,
  cvv
) => {
  try {
    const res = await post(addCreditURL, {
      customer_id,
      name,
      card_number,
      date,
      cvv
    });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const updateCreditCard = async (
  customer_id,
  name,
  card_number,
  date,
  cvv
) => {
  console.log("customer id ", customer_id);
  try {
    const res = await put(updateCreditURL, {
      customer_id,
      name,
      card_number,
      date,
      cvv
    });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const getUserCredit = async (id) => {
  try {
    const res = await get(getCreditURL + id, { id });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const removeItemFromCart = async (id, outItemid) => {
  let items;
  let cart_id;
  try {
    const res = await get(getUserCartURL + id, { id });
    if (res.status == 200) {
      items = [...res.data.items];
      cart_id = res.data._id;
    }
  } catch (err) {
    return handleErrResponse(err);
  }
  console.log('1.The old cart -');
  console.log(items);

  items = items.filter((item) => {
    return item.item_id !== outItemid._id;
  });

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
