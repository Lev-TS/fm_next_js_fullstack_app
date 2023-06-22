import TaskCard from "@/components/organisms/TaskCard/component";
import { getData } from "./helpers";
import type { ProjectPageParams } from "./types";

export default async function ProjectPage({ params }: ProjectPageParams) {
  const project = await getData(params.id);

  return (
    <div className="h-full overflow-y-auto pr-3 w-full">
      {/* @ts-expect-error Server Component */}
      {project ? <TaskCard tasks={project.tasks} title={project.name} /> : null}
    </div>
  );
}