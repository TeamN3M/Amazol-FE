export default Object.freeze({
<<<<<<< HEAD
  index: '/',
  login: '/Login',
  register: '/Register',
  profile: '/Profile',
  search: '/Search',
  cart: '/Cart',
  prodmanage: '/ProdManage',
=======
  index: "/",
  login: "/Login",
  register: "/Register",
  Mprofile: "/MProfile",
  profile: "/Profile",
  search: "/Search",
  cart: "/Cart",
  cusomerorders: "/Orders"
>>>>>>> main
});

const api = 'api';

<<<<<<< HEAD
const authEndPoint = `/${api}/auth`;
const authRegister = '/register';
=======
// const authEndPoint = `/${api}/auth`;
// const authRegister = "/register";
>>>>>>> main
// const authLogin = "/login";
// const authGetUser = "/getUser";

const userEndPoint = `/${api}/users`;
const userChangeInfo = 'changeInfo/:id';
const userFavorites = 'favorites/:id';
const userDelete = 'deleteUser/:id';
const userFind = 'findUser/:id';
const userGetAll = 'getUsers';

<<<<<<< HEAD
export const loginURL = 'http://localhost:4000/auth/login';
export const getUserURL = 'http://localhost:4000/auth';
export const getAuthManager = 'http://localhost:4000/code';
=======
export const loginURL = "http://localhost:4000/auth/login";
export const getUserURL = "http://localhost:4000/auth";
export const getCodeURL = "http://localhost:4000/code";
export const registerURL = "http://localhost:4000/auth/register";
export const addItemURL = "http://localhost:4000/item";
>>>>>>> main

// export const loginURL = `${authEndPoint}/${authLogin}`;
// export const registerURL = `${authEndPoint}/${authRegister}`;
// export const getUserURL = `${authEndPoint}/${authGetUser}`;

export const changeUserInfoURL = `${userEndPoint}/${userChangeInfo}`;
export const addToFavoritesUserURL = `${userEndPoint}/${userFavorites}`;
export const deleteUserURL = `${userEndPoint}/${userDelete}`;
export const findUserURL = `${userEndPoint}/${userFind}`;
export const getAllUsersURL = `${userEndPoint}/${userGetAll}`;
