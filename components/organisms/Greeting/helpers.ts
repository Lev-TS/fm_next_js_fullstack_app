import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";

export const getData = async () => {
  const user = await getUserFromCookie(cookies());
  return user;
};
