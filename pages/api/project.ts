import type { NextApiRequest, NextApiResponse } from "next";
import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

  await db.project.create({
    data: {
      name: req.body.name,
      ownerId: userId,
    },
  });

  res.json({ data: { message: "ok" } });
}
