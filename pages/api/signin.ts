import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import { comparePasswords, createJWT, hashPassword } from "@/lib/auth";
import { serialize } from "cookie";

export default async function signIn(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = await db.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.status(401).json({ error: "Invalid login" });
      return;
    }

    const isValidUser = await comparePasswords(
      req.body.password,
      user.password
    );

    if (!isValidUser) {
      res.status(401).json({ error: "Invalid login" });
      return;
    }

    const jwt = await createJWT(user);

    res
      .setHeader(
        "Set-Cookie",
        serialize(process.env.COOKIE_NAME as string, jwt, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        })
      )
      .status(201)
      .json({});
  } else {
    res.status(402).json({});
  }
}
