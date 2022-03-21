export const SIGNIN = "Sign In";
export const SIGNUP = "Sign Up";
export const HOMEPAGE = "Home Page";
export const FORGOT = "Forgot password?";
export const SIGNUP_OPT = "Don't have an account? Sign Up";
export const SIGNIN_OPT = " Already have an Account ?";
export const OFFERS = "I'm interested in receiving marketing offers by email";

// validate email Minimum 8 characters, at least one letter and one number
export const validatePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i;
// validate email
export const validateEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// validate name
export const validateNames = /[^A-Za-z]+/;
