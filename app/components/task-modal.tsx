"use client";

import { useState, useEffect } from "react";
import { Task } from "../types/task";

const TAG_OPTIONS = ["Design", "Backend", "Frontend"];
const STATUS_OPTIONS = ["todo", "doing", "done"];

interface TaskModalProps {
  isOpen: boolean;
  task?: Task | null;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const TaskModal = ({ isOpen, task, onClose, onSave }: TaskModalProps) => {
  const [formData, setFormData] = useState<Task>(
    task || { title: "", description: "", status: "todo", links: [], files: [], tags: [] }
  );

  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);
  
  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagChange = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    // setFormData({ title: "", description: "", status: "todo", links: [], files: [], tags: [] });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-4">{task ? "Edit Task" : "Create Task"}</h2>
        <label className="block text-sm font-semibold">Task Name*</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <label className="block text-sm font-semibold">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />
        <label className="block text-sm font-semibold">Tags</label>
        <div className="mb-4">
          {TAG_OPTIONS.map((tag) => (
            <label key={tag} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.tags.includes(tag.toLowerCase())}
                onChange={() => handleTagChange(tag.toLowerCase())}
              />
              {tag}
            </label>
          ))}
        </div>
        <label className="block text-sm font-semibold">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        >
          {STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
