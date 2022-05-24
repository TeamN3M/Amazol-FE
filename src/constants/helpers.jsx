import { JWT_KEY, CART_TOTAL } from "./strings";

export const rememberMeSession = (jwt) => {
  localStorage.setItem(JWT_KEY, jwt);
};

export const getJwtKey = () => localStorage.getItem(JWT_KEY);

export const endLoginSession = () => {
  localStorage.removeItem(JWT_KEY);
  localStorage.removeItem(CART_TOTAL);
};

export const setTotalCart = (totalPrice) => {
  localStorage.setItem(CART_TOTAL, totalPrice);
};
export const getTotalCart = () => {
  return localStorage.getItem(CART_TOTAL);
};
export const findCartItemIndex = (items, itemsID) =>
  items.findIndex((item) => item?.product?._id === itemsID);

export const calcCartTotal = (items) => {
  let totalCart = 0;
  items.map((item) => {
    totalCart += item.item_price * item.item_quantity;
    return 1;
  });

  return totalCart;
};
