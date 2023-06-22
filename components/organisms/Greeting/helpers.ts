import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";

export const getData = async () => {
  await delay(1000);
  const user = await getUserFromCookie(cookies());
  return user;
};
