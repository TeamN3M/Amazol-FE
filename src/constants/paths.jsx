export default Object.freeze({
  index: "/",
  login: "/Login",
  register: "/Register",
  forgot: "/Forgot",
  profile: "/Profile",
  mprofile: "/MProfile",
  search: "/Search",
  cart: "/Cart",
  cartt: "/Cartt",
  cusomerorders: "/Orders",
  manageorders: "/ManageOrders",
  prodmanage: "/ProdManage",
  uploadImage: "/upload",
  purchase: "/Purchase",
});

// const authEndPoint = `/${api}/auth`;
// const authRegister = "/register";
// const authLogin = "/login";
// const authGetUser = "/getUser";

const userEndPoint = `/user`;
const userChangeInfo = "changeInfo/:id";
const userFavorites = "favorites/:id";
const userDelete = "deleteUser/:id";
const userFind = "findUser/:id";
const userGetAll = "getUsers";

export const loginURL = "http://localhost:4000/auth/login";
export const getUserURL = "http://localhost:4000/auth/getUser";
export const getCodeURL = "http://localhost:4000/code";
export const registerURL = "http://localhost:4000/auth/register";
export const addItemURL = "http://localhost:4000/item";
export const getItemURL = "http://localhost:4000/item/findItem/";
export const getItemsURL = "http://localhost:4000/item";
export const updateItemURL = "http://localhost:4000/item/updateItem/";
export const getUserByEmailURL = "http://localhost:4000/user/findUserByEmail/";
export const resetPasswordlURL = "http://localhost:4000/user/resetPassword/";
export const updateUserlURL = "http://localhost:4000/user/updateInfo/";
export const addUserCartURL = "http://localhost:4000/cart";
export const getUserCartURL = "http://localhost:4000/cart/userCart/";
export const updateCartURL = "http://localhost:4000/cart/updateCart/";
export const addAddressURL = "http://localhost:4000/address/";
export const getAddressURL = "http://localhost:4000/address/getAddress/";
export const updateAddressURL = "http://localhost:4000/address/updateAddress/";
export const addCreditURL = "http://localhost:4000/credit/";
export const getCreditURL = "http://localhost:4000/credit/getCredit/";
export const updateCreditURL = "http://localhost:4000/credit/updateCredit/";

// export const loginURL = `${authEndPoint}/${authLogin}`;
// export const registerURL = `${authEndPoint}/${authRegister}`;
// export const getUserURL = `${authEndPoint}/${authGetUser}`;

export const changeUserInfoURL = `${userEndPoint}/${userChangeInfo}`;
export const addToFavoritesUserURL = `${userEndPoint}/${userFavorites}`;
export const deleteUserURL = `${userEndPoint}/${userDelete}`;
export const findUserURL = `${userEndPoint}/${userFind}`;
export const getAllUsersURL = `${userEndPoint}/${userGetAll}`;
// export const getUserByEmailURL = `${userEndPoint}/${userGetByEmail}`;
