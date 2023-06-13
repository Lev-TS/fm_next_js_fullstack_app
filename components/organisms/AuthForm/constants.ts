import { PageRoutes } from "@/constants/routes";

export const REGISTER_CONTENT = {
  linkUrl: PageRoutes.SignIn,
  linkText: "Already have an account?",
  header: "Create a new account",
  subheader: "Just a few things to get started",
  buttonText: "Register",
};

export const SIGNIN_CONTENT = {
  linkUrl: PageRoutes.Register,
  linkText: "Don't have an account?",
  header: "Welcome Back",
  subheader: "Enter your credentials to access your account",
  buttonText: "Sign In",
};

export const INITIAL_STATE = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};
