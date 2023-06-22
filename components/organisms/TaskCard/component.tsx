import Button from "@/components/atoms/Button/component";
import Card from "@/components/atoms/Card/component";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { Task, TASK_STATUS } from "@prisma/client";
import { cookies } from "next/headers";
import { FC } from "react";
import { getData } from "./helpers";



const TaskCard = async ({ title, tasks }: { title: string; tasks?: Task[] }) => {
  const data = tasks || (await getData());

  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-3xl text-gray-600">{title}</span>
        </div>
        <div>
          <Button intent="text" className="text-violet-600">
            + Create New
          </Button>
        </div>
      </div>
      <div>
        {data && data.length ? (
          <div>
            {data.map((task) => (
              <div className="py-2 " key={task.id}>
                <div>
                  <span className="text-gray-800">{task.name}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">
                    {task.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>no tasks</div>
        )}
      </div>
    </Card>
  );
}

export default TaskCard;