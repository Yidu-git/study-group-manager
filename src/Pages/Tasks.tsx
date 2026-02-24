import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
  progress?: number;
}

// interface AcademicTask {
//   id: string;
//   subject: string;
//   topic?: string;
//   title: string;
//   description?: string;
//   status: "not-started" | "in-progress" | "completed";
//   progress: number;           // %
//   dueDate?: Date;
//   estimatedHours?: number;
//   actualHours?: number;
//   createdAt: Date;
// }
// userId: string;        // for multi-user apps
// parentTaskId?: string; // for subtasks
// recurring?: boolean;
// reminderAt?: Date;

const TasksPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const DefaultTasks: Task[] = [
    {
      id: "a1f9c3e2-7b6a-4d1e-9c12-8f3a2b4d5e01",
      title: "Complete Mathematics Assignment",
      description:
        "Finish calculus exercises from chapter 5 and submit online.",
      completed: false,
      priority: "high",
      dueDate: new Date("2026-02-22T23:59:00"),
      createdAt: new Date("2026-02-18T09:00:00"),
      updatedAt: new Date("2026-02-18T09:00:00"),
      tags: ["school", "math", "homework"],
      progress: 40,
    },
    {
      id: "b2d8a7c1-3e5f-4a8b-9d44-1c2e6f7a8902",
      title: "Study Physics – Waves",
      description: "Revise wave properties and solve past paper questions.",
      completed: false,
      priority: "medium",
      dueDate: new Date("2026-02-25T18:00:00"),
      createdAt: new Date("2026-02-17T14:30:00"),
      updatedAt: new Date("2026-02-18T10:15:00"),
      tags: ["school", "physics", "revision"],
      progress: 60,
    },
    {
      id: "c3e7b2f9-6a1d-4c3b-8e77-2f4b6a8c9013",
      title: "Build Task Filtering Feature",
      description:
        "Implement filtering by priority and completion status in the app.",
      completed: false,
      priority: "high",
      dueDate: new Date("2026-02-20T20:00:00"),
      createdAt: new Date("2026-02-16T11:00:00"),
      updatedAt: new Date("2026-02-18T08:45:00"),
      tags: ["development", "react", "feature"],
      progress: 75,
    },
    {
      id: "d4f6a1c8-9b2e-4d7f-8c33-3a5d7e9b0124",
      title: "Read 20 Pages of English Novel",
      description: "Read assigned literature and summarize key themes.",
      completed: true,
      priority: "low",
      dueDate: new Date("2026-02-15T21:00:00"),
      createdAt: new Date("2026-02-14T16:00:00"),
      updatedAt: new Date("2026-02-15T20:30:00"),
      tags: ["school", "english", "reading"],
      progress: 100,
    },
    {
      id: "e5a4b9d2-1c7f-4e6a-9d55-4b6c8d0e1235",
      title: "Prepare Biology Lab Report",
      description:
        "Write and format lab findings on cell structure experiment.",
      completed: false,
      priority: "medium",
      dueDate: new Date("2026-02-24T17:00:00"),
      createdAt: new Date("2026-02-18T07:30:00"),
      updatedAt: new Date("2026-02-18T07:30:00"),
      tags: ["school", "biology", "lab"],
      progress: 20,
    },
  ];
  const [tasks, setTasks] = useState<Task[]>(DefaultTasks);

  const priorityStyles: Record<string, string> = {
    low: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-red-100 text-red-700 border",
  };

  const sortByCompletion = (tasks: Task[]): Task[] => {
    return [...tasks].sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? 1 : -1;
    });
  };

  useEffect(() => {
    // if (tasks === sortByCompletion(tasks)) return;
    setTasks((prev) => {
      if (searchTerm.includes("#")) {
        const tasks = DefaultTasks.filter(
          (a) =>
            a.tags?.filter((tag) => tag.includes(searchTerm.split("#")[1]))
              .length !== 0,
        );

        if (tasks.length !== 0) return tasks;
        return prev;
      }
      return DefaultTasks.filter((a) => a.title.includes(searchTerm));
    });

    setTasks((prev) => sortByCompletion(prev));
  }, [searchTerm]);

  return (
    <div className="bg-gray-100s flex h-full w-full flex-col">
      <div className="sticky z-10 flex h-fit w-full flex-row items-center justify-between bg-white px-5 py-3 text-black shadow-[00px_10px_10px_0_#00000012]">
        <h1 className="text-3xl">Tasks</h1>
        <div className="flex h-10 w-fit flex-row items-center justify-center rounded-full border-3 border-neutral-400 bg-white p-4 text-lg">
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`z-100 h-10 w-10 transition-[width] duration-300 focus:outline-0 ${searchTerm.length !== 0 ? "w-30 md:w-100" : "focus:w-30 md:focus:w-100"}`}
          />
          <CiSearch
            size={"2rem"}
            className="z-0 -ml-1 text-neutral-400"
            strokeWidth={1}
          />
        </div>
        <div />
      </div>
      <div className="mb-2 grid h-full w-full gap-2 overflow-x-auto bg-white p-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => {
          return (
            <div
              className={
                "flex max-h-100 flex-col gap-3 rounded-md px-5 py-5 shadow-[00px_10px_10px_0_#00000012] hover:shadow-[00px_12px_15px_0_#00000015] md:max-h-fit " +
                (task.completed ? "bg-gray-100 opacity-65" : "bg-white")
              }
            >
              <div className="flex flex-row items-center justify-between gap-2">
                <h1
                  className={
                    "text-xl font-semibold " +
                    (task.completed ? "text-gray-500 line-through" : "")
                  }
                >
                  {task.title}
                </h1>

                <h1
                  className={
                    "rounded-full px-3 py-1 text-sm font-semibold " +
                    priorityStyles[task.priority]
                  }
                >
                  {task.priority}
                </h1>
              </div>
              <div className="flex h-fit w-full flex-row items-center gap-1">
                {task.tags?.map((tag) => (
                  <div className="rounded-md bg-blue-500 px-2 py-0.5 text-white">
                    <p>#{tag}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-light text-neutral-500">
                {task.description}
              </h3>
              <div
                className="flex w-full flex-col"
                onClick={() =>
                  setTasks((prev) =>
                    [...prev].map((Task) => {
                      // console.log(Task);
                      if (Task.id === task.id) {
                        return {
                          ...Task,
                          progress:
                            ((Task.progress ? Task.progress : 0) + 10) % 100,
                        };
                      }
                      return Task;
                    }),
                  )
                }
              >
                <div className="flex w-full flex-row items-center justify-between">
                  <h4 className="text-md">Progress</h4>
                  <h4 className="text-md">{task.progress}%</h4>
                </div>
                <div className="mt-1 h-2 w-full rounded-full border border-neutral-500">
                  <div
                    className="h-full rounded-full bg-black"
                    style={{ width: task.progress + "%" }}
                  />
                </div>
              </div>
              <div className="h-full" />
              <div className="flex w-full flex-row gap-2 text-wrap text-neutral-500">
                <p>Due {task.dueDate?.toDateString()}</p>
                <p>-</p>
                <p>Created at {task.createdAt?.toDateString()}</p>
                <p>-</p>
                <p>Updated at {task.updatedAt?.toDateString()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TasksPage;
