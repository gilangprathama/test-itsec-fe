"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Capsule from "../../components/capsule";

interface Task {
  id: number;
  status: string;
  title: string;
  description?: string;
  links: string[];
  files: string[];
  tags: string[];
  created_at?: string;
  updated_at?: string;
}

const BoardDetail = () => {
  const router = useRouter();
  const params = useParams();
  const taskid = params.taskid;
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    if (!taskid) return;

    fetch("/tasks.json")
      .then((res) => res.json())
      .then((data: Task[]) => {
        const foundTask = data.find((t: Task) => t.id === parseInt(taskid as string));
        setTask(foundTask || null);
      })
      .catch((err) => console.error("Failed to load tasks", err));
  }, [taskid]);

  if (!task) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Task Detail</h1>
      <div className="flex items-center text-xs font-semibold text-gray-500 mb-4">
        <a href="/board">Dashboard</a>
        <span className="px-2">&rsaquo;</span>
        <a href="#">{task.title}</a>
      </div>

      <div className="p-4 mb-4 rounded-lg bg-white shadow-sm border">
        <h1 className="text-2xl font-bold">{task.title}</h1>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3 w-full">
            <p className="text-gray-500 mt-2">{task.description || "No description available"}</p>
            <div className="my-4 flex gap-2">
              {task.tags.map((tag) => {
                if (tag.includes("backend")) return <Capsule key={tag} variant="be" />;
                if (tag.includes("frontend")) return <Capsule key={tag} variant="fe" />;
                if (tag.includes("design")) return <Capsule key={tag} variant="design" />;
                return null;
              })}
            </div>

            <p className="text-xs text-gray-600">Status: <span className="uppercase">{task.status}</span></p>
          </div>
          <div className="md:w-1/3 w-full text-xs text-gray-500">
              <p className="font-semibold">Info</p>
              <p>Created at: {task.created_at || "-"}</p>
              <p>Updated at: {task.updated_at || "-"}</p>
          </div>
        </div>
      </div>

      <div className="mr-0 flex items-center md:justify-end justify-center gap-2">
        <button
          className="bg-blue-500 text-white text-xs px-4 py-2 md:px-2 md:py-1 md:text-sm md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Edit task
        </button>
        <p>or</p>
        <a href="#" className="text-red-500">Delete</a>
      </div>
    </div>
  );
};

export default BoardDetail;
