"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../components/card";
import TaskModal from "../components/task-modal";
import { Task } from "../types/task";

const API_URL = "https://67c84ea60acf98d07085f2e6.mockapi.io/api/tasks";

export default function BoardPage() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setName(storedUsername);
    } else {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Failed to fetch tasks:", err));
  }, []);

  const columns = [
    { title: "TO DO", status: "todo" },
    { title: "DOING", status: "doing" },
    { title: "DONE", status: "done" },
  ];

  const handleSaveTask = async (taskData: Task) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      console.error("Failed to save task");
      return;
    }

    const newTask = await response.json();
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div className="md:max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-md md:text-2xl font-bold pr-2">Hello {name}, Here&apos;s your tasks</h1>
        <button
          className="bg-blue-500 text-white text-xs px-2 py-1 md:text-sm md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => setIsModalOpen(true)}
        >
          Add a task
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto md:flex-nowrap">
        {columns.map((col) => (
          <div key={col.status} className="md:w-1/3 sm:w-full">
            <p className="font-bold text-sm mb-4 text-gray-500">{col.title}</p>
            <div className="space-y-4">
              {tasks
                .filter((task) => task.status === col.status)
                .map((task) => (
                  <Card
                    key={task.id}
                    task={task}
                    onClick={() => router.push(`/board/${task.id}`)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <TaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveTask}
        />
      )}
    </div>
  );
}