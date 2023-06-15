// import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { PageRoutes } from "./constants/routes";

const PUBLIC_FILE = /\.(.*)$/;

// had to make this again here as the other one is in a lib/auth file is with
// bcrypt, which is not supported on edge runtime. We can't run all npm packages
// here so we copy it. Alternatively, we could have exported it in another file
// which doesn't import unsupported packages.
const verifyJWT = async (jwt: string) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload;
};

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith(PageRoutes.SignIn) ||
    pathname.startsWith(PageRoutes.Register) ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const jwt = req.cookies.get(process.env.COOKIE_NAME as string);

  if (!jwt) {
    req.nextUrl.pathname = PageRoutes.SignIn;
    return NextResponse.redirect(req.nextUrl);
  }

  try {
    await verifyJWT(jwt.value);
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    req.nextUrl.pathname = PageRoutes.SignIn;
    return NextResponse.redirect(req.nextUrl);
  }
}
