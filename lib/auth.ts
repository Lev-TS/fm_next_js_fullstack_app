import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { SignJWT, jwtVerify } from "jose";
import { ReadonlyRequestCookies } from "next/dist/server/app-render";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";
import { db } from "./db";

export const hashPassword = (password: string) => bcrypt.hash(password, 10);

export const comparePasswords = (
  plainPassword: string,
  hashedPassword: string
) => bcrypt.compare(plainPassword, hashedPassword);

export const createJWT = ({ id }: User) => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24 * 7;

  return new SignJWT({ payload: { userId: id } })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
};

export const validateJWT = async (jwt: string) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload.payload as { userId: User["id"] };
};

export const getUserFromCookie = async (
  cookies: RequestCookies | ReadonlyRequestCookies
) => {
  const jwt = cookies.get(process.env.COOKIE_NAME as string);

  if (!jwt) {
    return null;
  }

  const payload = await validateJWT(jwt.value);

  const user = await db.user.findUnique({
    where: { id: payload.userId },
  });

  return user;
};
