import { JWT_KEY } from "./strings";

export const rememberMeSession = (jwt) => {
  localStorage.setItem(JWT_KEY, jwt);
};

export const getJwtKey = () => localStorage.getItem(JWT_KEY);

export const endLoginSession = () => {
  localStorage.removeItem(JWT_KEY);
};
