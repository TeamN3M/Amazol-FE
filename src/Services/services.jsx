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
  updateCreditURL,
  addUserCartURL,
  addNewOrderURL,
  getUserFavoritesURL,
  updateUserFavoritesURL,
  addItemToFavoritesURL,
  getAllOrdersURL,
  updateOrderStatusURL,
  getUserOrdersURL,
  addFavoritesURL,
  addNewDeliveryURL,
  getAllDeliveriesURL,
  updateDeliveryURL,
  loginGoogleURL,
  getDeliveryByIdURL,
  getReviewByIdURL,
  addReviewByIdURL,
  deleteReviewByIdURL,
  addAfiiliateURL
} from "../constants/paths";
import { handleErrResponse, post, get, put } from "./axios";
import { getCodeURL } from "../constants/paths";
// register services
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
// manager register services
export const getCode = async () => {
  try {
    const res = await get(getCodeURL);
    console.log(res.data);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
// login services
export const loginUser = async (email, password) => {
  try {
    const res = await post(loginURL, { email, password });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const loginGoogleUser = async (
  email,
  password,
  first_name,
  last_name
) => {
  try {
    const res = await post(loginGoogleURL, {
      email,
      password,
      first_name,
      last_name
    });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
// user services
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
// items services
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
    // console.log(res.data);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const updateItemById = async (id, item) => {
  try {
    const res = await put(updateItemURL + id, { id, item });
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
// cart services
export const addCart = async (id) => {
  const customer_id = id;
  const items = [];
  try {
    const res = await post(addUserCartURL, { customer_id, items });
    //console.log(res.data);
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
  let userCart;
  let cart_id;
  try {
    const res = await get(getUserCartURL + id, { id });
    if (res.status == 200) {
      userCart = res.data;
      const indexOfObject = userCart.items.findIndex((item) => {
        return item.item_id === inItem._id;
      });
      if (indexOfObject > -1) {
        userCart.items[indexOfObject].item_quantity++;
      } else {
        userCart.items.push({
          item_id: inItem._id,
          item_name: inItem.item_name,
          item_rating: inItem.item_rating,
          item_price: inItem.item_price,
          item_pictures: inItem.item_pictures,
          item_quantity: 1
        });
      }

      cart_id = res.data._id;
    }
  } catch (err) {
    return handleErrResponse(err);
  }

  try {
    const res = await put(updateCartURL + cart_id, {
      customer_id: id,
      items: userCart.items
    });
    console.log(res);
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
  console.log("1.The old cart -");
  console.log(items);

  items = items.filter((item) => {
    return item.item_id !== outItemid._id;
  });

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
export const updateCart = async (cartID, customer_id, items) => {
  try {
    const res = await put(updateCartURL + cartID, {
      customer_id,
      items
    });
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const addAffiliateToCart = async (user_id) => {
  try {
    const res = await put(addAfiiliateURL, { customer_id: user_id });
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
// address services
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
// credir card services
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
// wishlist services
export const addFavorites = async (id) => {
  const customer_id = id;
  const items = [];
  try {
    const res = await post(addFavoritesURL, { customer_id, items });
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const getUserFavorites = async (id) => {
  try {
    const res = await get(getUserFavoritesURL + id);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const updateUserFavorites = async (favoritesID, customer_id, items) => {
  try {
    const res = await put(updateUserFavoritesURL + favoritesID, {
      customer_id,
      items
    });
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const addItemToFavorites = async (cid, item) => {
  const itemTo = {
    item_id: item._id,
    item_name: item.item_name,
    item_price: item.item_price,
    item_rating: item.item_rating,
    item_pictures: item.item_pictures
  };
  try {
    const res = await put(addItemToFavoritesURL, {
      customer_id: cid,
      item: itemTo
    });
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
// order services
export const addNewOrder = async (customer_id, items, price, address) => {
  try {
    const res = await post(addNewOrderURL, {
      customer_id,
      items,
      price,
      address
    });
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const getAllOrders = async () => {
  try {
    const res = await get(getAllOrdersURL);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const updateOrderStatus = async (id, newStatus) => {
  try {
    const res = await put(updateOrderStatusURL + id, { status: newStatus });
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const getUserOrders = async (id) => {
  try {
    const res = await get(getUserOrdersURL + id);

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
// delivery
export const addNewDelivery = async (date, time) => {
  try {
    const res = await post(addNewDeliveryURL, {
      date,
      time
    });
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const getAllDeliveries = async () => {
  try {
    const res = await get(getAllDeliveriesURL);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const updateDelivery = async (id, orderID, address, newStatus) => {
  try {
    const res = await put(updateDeliveryURL + id, {
      orderID,
      address,
      newStatus
    });
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const getDeliveryById = async (id) => {
  try {
    const res = await get(getAllDeliveriesURL + id);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
export const getDeleveryByOrderId = async (oid) => {
  try {
    const res = await get(getDeliveryByIdURL + oid);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getReviewByOrderId = async (rid) => {
  try {
    const res = await get(getReviewByIdURL + rid);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const addReviewById = async (iid, review) => {
  try {
    const res = await post(addReviewByIdURL + iid, {
      item_id: review.item_id,
      customer_name: review.customer_name,
      date: review.date,
      review: review.text,
      rating: review.rating
    });
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const deleteReviewById = async (rid) => {
  try {
    const res = await get(deleteReviewByIdURL + rid, { id: rid });
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
