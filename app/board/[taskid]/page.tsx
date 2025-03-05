"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { format } from "date-fns";
import Capsule from "../../components/capsule";
import TaskModal from "../../components/task-modal";
import { Task } from "../../types/task";
import Link from "next/link";

const API_URL = "https://67c84ea60acf98d07085f2e6.mockapi.io/api/tasks";

function formatDate(dateString: string | undefined) {
  if (!dateString) return "-";
  return format(new Date(dateString), "dd MMM yyyy, hh:mm:ss a");
}

const BoardDetail = () => {
  const router = useRouter();
  const params = useParams();
  const taskid = params.taskid;
  const [task, setTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    if (taskid) {
      fetch(`${API_URL}/${taskid}`)
        .then((res) => res.json())
        .then((data) => setTask(data))
        .catch((err) => console.error("Failed to fetch task:", err));
    }
  }, [taskid]);

  const handleUpdateTask = async (taskData: Task) => {
    const response = await fetch(`${API_URL}/${taskid}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      console.error("Failed to save task");
      return;
    }

    const updatedTask = await response.json();
    setTask(updatedTask);
  };

  const handleDeleteTask = async () => {
    const response = await fetch(`${API_URL}/${taskid}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Failed to delete task");
      return;
    }

    router.push("/board"); // Redirect to board page after deletion
  };

  if (!task) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Task Detail</h1>
      <div className="flex items-center text-xs font-semibold text-gray-500 mb-4">
        <Link href="/board">Dashboard</Link>
        <span className="px-2">&rsaquo;</span>
        <a href="#" className="truncate w-1/2">{task.title}</a>
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
              <p>Created at: {formatDate(task.created_at)}</p>
              <p>Updated at: {formatDate(task.updated_at)}</p>
          </div>
        </div>
      </div>

      <div className="mr-0 flex items-center md:justify-end justify-center gap-2">
        <button
          className="bg-blue-500 text-white text-xs px-4 py-2 md:px-2 md:py-1 md:text-sm md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => setIsModalOpen(true)}
        >
          Edit task
        </button>
        <p>or</p>
        <a onClick={() => setIsDeleteModalOpen(true)} className="text-red-500 cursor-pointer">Delete</a>
      </div>

      {isModalOpen && (
        <TaskModal
          isOpen={isModalOpen}
          task={task}
          onClose={() => setIsModalOpen(false)}
          onSave={handleUpdateTask}
        />
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Delete Task</h2>
            <p>Are you sure you want to delete this task?</p>
            <div className="mt-6 flex justify-end gap-2">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                onClick={handleDeleteTask}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardDetail;
