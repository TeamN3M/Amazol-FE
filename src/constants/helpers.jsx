import { JWT_KEY, CART_KEY } from "./strings";

export const rememberMeSession = (jwt) => {
  localStorage.setItem(JWT_KEY, jwt);
};

export const getJwtKey = () => localStorage.getItem(JWT_KEY);

export const endLoginSession = () => {
  localStorage.removeItem(JWT_KEY);
};

export const setCartSession = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};
export const getCartSession = () => {
  const sessionCart = localStorage.getItem(CART_KEY);
  if (sessionCart) {
    return JSON.parse(sessionCart);
  }
  return {
    products: [],
    total: 0
  };
};
export const findCartProductIndex = (items, itemsID) =>
  items.findIndex((item) => item?.product?._id === itemsID);

export const calcCartTotal = (items) => {
  let totalCart = 0;
  items.map((item) => {
    totalCart += item.product.price * item.quantity;
    return 1;
  });

  return totalCart;
};
