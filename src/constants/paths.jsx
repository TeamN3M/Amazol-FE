export default Object.freeze({
  index: '/',
  login: '/Login',
  register: '/Register',
  forgot: '/Forgot',
  profile: '/Profile',
  mprofile: '/MProfile',
  search: '/Search',
  cart: '/Cart',
  cusomerorders: '/Orders',
  manageorders: '/ManageOrders',
  prodmanage: '/ProdManage',
  uploadImage: '/upload',
  purchase: '/Purchase',
  wishList: '/Wishlist',
  financeinfo: '/FinanceInfo',
  affiliate: '/Affiliate',
});

const userEndPoint = `/user`;
const userChangeInfo = 'changeInfo/:id';
const userFavorites = 'favorites/:id';
const userDelete = 'deleteUser/:id';
const userFind = 'findUser/:id';
const userGetAll = 'getUsers';

// login
export const loginURL = 'http://localhost:4000/auth/login';
// register
export const getCodeURL = 'http://localhost:4000/code';
export const registerURL = 'http://localhost:4000/auth/register';
// user
export const getUserURL = 'http://localhost:4000/auth/getUser';
export const getUserByEmailURL = 'http://localhost:4000/user/findUserByEmail/';
export const resetPasswordlURL = 'http://localhost:4000/user/resetPassword/';
export const updateUserlURL = 'http://localhost:4000/user/updateInfo/';
// items
export const addItemURL = 'http://localhost:4000/item';
export const getItemURL = 'http://localhost:4000/item/findItem/';
export const getItemsURL = 'http://localhost:4000/item';
export const updateItemURL = 'http://localhost:4000/item/updateItem/';
// cart
export const addUserCartURL = 'http://localhost:4000/cart';
export const getUserCartURL = 'http://localhost:4000/cart/userCart/';
export const updateCartURL = 'http://localhost:4000/cart/updateCart/';
// address
export const addAddressURL = 'http://localhost:4000/address/';
export const getAddressURL = 'http://localhost:4000/address/getAddress/';
export const updateAddressURL = 'http://localhost:4000/address/updateAddress/';
// credit card
export const addCreditURL = 'http://localhost:4000/credit/';
export const getCreditURL = 'http://localhost:4000/credit/getCredit/';
export const updateCreditURL = 'http://localhost:4000/credit/updateCredit/';
// order
export const addNewOrderURL = 'http://localhost:4000/orders';
export const getAllOrdersURL = 'http://localhost:4000/orders';
export const updateOrderStatusURL = 'http://localhost:4000/orders/updateOrder/';
export const getUserOrdersURL = 'http://localhost:4000/orders/userOrders/';
// favorites
export const addFavoritesURL = 'http://localhost:4000/favorites/';
export const getUserFavoritesURL =
  'http://localhost:4000/favorites/userFavorites/';
export const updateUserFavoritesURL =
  'http://localhost:4000/favorites/updateFavorites/';
export const addItemToFavoritesURL =
  'http://localhost:4000/favorites/addItemFavorites/';
// delivery
export const addNewDeliveryURL = 'http://localhost:4000/delivery';
export const getAllDeliveriesURL = 'http://localhost:4000/delivery';
export const updateDeliveryURL =
  'http://localhost:4000/delivery/updateDelivery/';
export const getDeliveryByIdURL =
  'http://localhost:4000/delivery/orderDelivery/';
//Review
export const addReviewByIdURL = 'http://localhost:4000/review/';
export const getReviewByIdURL = 'http://localhost:4000/review/itemReview/';
export const deleteReviewByIdURL = 'http://localhost:4000/review/';

export const changeUserInfoURL = `${userEndPoint}/${userChangeInfo}`;
export const addToFavoritesUserURL = `${userEndPoint}/${userFavorites}`;
export const deleteUserURL = `${userEndPoint}/${userDelete}`;
export const findUserURL = `${userEndPoint}/${userFind}`;
export const getAllUsersURL = `${userEndPoint}/${userGetAll}`;
