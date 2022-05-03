export const SIGNIN = "Sign In";
export const SIGNUP = "Sign Up";
export const MANAGERSIGNIN = "Manager ? Sign In here";
export const MANAGERSIGNUP = "Manager ? Sign Up here";
export const COSTUMERSIGNUP = "Costumer ? Sign Up here";
export const HOMEPAGE = "Home Page";
export const FORGOT = "Forgot password?";
export const SIGNUP_OPT = "Don't have an account? Sign Up";
export const SIGNIN_OPT = " Already have an Account ?";
export const OFFERS = "I'm interested in receiving marketing offers by email";
export const MANAGERREGISTER = "Manager Registration";
export const ENTERCODE = "Enter the manager code here:";
export const REGISTEROK = "Registration Succeeded :)";
export const REGISTERFAIL = "Registration Failed :(";
export const EXISTUSER = "User exist ";

// validate email Minimum 8 characters, at least one letter and one number
export const validatePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i;
// validate email
export const validateEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// validate name
export const validateNames = /[^A-Za-z]+/;

export const JWT_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWZjNjUzZjc4MmE4NjcwMjRjNTEyOSIsImlhdCI6MTY1MDU1MDI4NiwiZXhwIjoxNjUyNjIzODg2fQ.z8ys4X9ev2yohfiqKVNLX5TY4kE1Z7rC8sCfg7_pVSA";
