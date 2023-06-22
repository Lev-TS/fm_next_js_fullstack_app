import { ProjectWithTasks } from "./types";

export const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const calculateProgress = (tasks: ProjectWithTasks["tasks"]) => {
  const completedTaskCount = tasks.filter(
    (task) => task.status === "COMPLETED"
  ).length;

  return {
    totalTaskCount: tasks.length,
    completedTaskCount,
    progress: Math.ceil((completedTaskCount / tasks.length) * 100),
  };
};
