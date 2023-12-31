import { Prisma } from "@prisma/client";

export const projectWithTasks = Prisma.validator<Prisma.ProjectArgs>()({
  include: { tasks: true },
});

export type ProjectWithTasks = Prisma.ProjectGetPayload<
  typeof projectWithTasks
>;

export interface ProjectCardProps {
  project: ProjectWithTasks;
}
