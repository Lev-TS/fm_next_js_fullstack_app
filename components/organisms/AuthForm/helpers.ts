import { REGISTER_CONTENT, SIGNIN_CONTENT } from "./constants";

export const getContent = (mode: string) =>
  mode === "register" ? REGISTER_CONTENT : SIGNIN_CONTENT;
