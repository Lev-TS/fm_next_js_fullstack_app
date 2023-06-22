import { cookies } from "next/headers";

import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { delay } from "@/lib/async";

export const getData = async (projectId: string) => {
  await delay(1000);

  const user = await getUserFromCookie(cookies());

  const project = await db.project.findFirst({
    where: { id: projectId, ownerId: user?.id },
    include: {
      tasks: true,
    },
  });

  return project;
};
