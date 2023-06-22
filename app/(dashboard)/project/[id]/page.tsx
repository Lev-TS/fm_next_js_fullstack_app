import TaskCard from "@/components/organisms/TaskCard/component";
import { getData } from "./helpers";

export default async function ProjectPage({ params }) {
  const project = await getData(params.id);

  return (
    <div className="h-full overflow-y-auto pr-3 w-full">
      {project ? <TaskCard tasks={project.tasks} title={project.name} /> : null}
    </div>
  );
}