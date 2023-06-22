import { FC } from "react";

import clsx from "clsx";
import Card from "@/components/atoms/Card/component";

import { calculateProgress, formatDate } from "./helpers";
import { ProjectCardProps } from "./types";

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const createdAt = formatDate(project.createdAt)
  const { totalTaskCount, completedTaskCount, progress } = calculateProgress(project.tasks)

  return (
    <Card className="!px-6 !py-8 hover:scale-105 transition-all ease-in-out duration-200">
      <div>
        <span className="text-sm text-gray-300">
          {createdAt}
        </span>
      </div>
      <div className="mb-6">
        <span className="text-3xl text-gray-600">{project.name}</span>
      </div>
      <div className="mb-2">
        <span className="text-gray-400">
          {completedTaskCount}/{totalTaskCount} completed
        </span>
      </div>
      <div>
        <div className="w-full h-2 bg-violet-200 rounded-full mb-2">
          <div
            className={"h-full text-center text-xs text-white bg-violet-600 rounded-full"}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-600 font-semibold">
            {progress}%
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;