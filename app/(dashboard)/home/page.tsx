import ProjectCard from "@/components/molecules/ProjectCard/component";
import { SuspendedGreeting } from "@/components/organisms/Greeting/component.with.skeleton";
import NewProject from "@/components/organisms/NewProject/component";
import TaskCard from "@/components/organisms/TaskCard/component";
import { PageRoutes } from "@/constants/routes";

import Link from "next/link";
import { getData } from "./helpers";

export default async function Page() {
  const projects = await getData()

  return (
    <div className="h-full overflow-y-auto pr-3 w-full">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          <SuspendedGreeting />
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          {projects.map(project => (
            <div className="w-1/3 p-3" key={project.id}>
              <Link href={`${PageRoutes.Project}/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            </div>
          ))}
          <div className="w-1/3 p-3">
            <NewProject />
          </div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">
            <TaskCard title="All tasks" />
          </div>
        </div>
      </div>

    </div>
  );
}
