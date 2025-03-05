import { Icon } from "@iconify/react";
import Capsule from "../components/capsule";

interface Task {
  title: string;
  description?: string;
  links: string[];
  files: string[];
  tags: string[];
}

interface CardProps {
  task: Task;
  onClick?: () => void;
}

export default function Card({ task, onClick }: CardProps) {
  return (
    <div
      className="p-4 rounded-lg bg-white shadow-sm border cursor-pointer"
      onClick={onClick}
    >
      <p className="font-semibold">{task.title}</p>
      {task.description && (
        <p className="text-gray-500 text-sm line-clamp-2">{task.description}</p>
      )}

      {(task.links.length > 0 || task.files.length > 0) && (
        <div className="columns-2 mt-2">
          {task.links.map((link, index) => (
            <a key={index} href={link} className="flex items-center text-sky-500 text-xs">
              <Icon icon="mdi:link-variant" className="pr-1 text-gray-500" />
              {link}
            </a>
          ))}
          {task.files.map((file, index) => (
            <a key={index} href={file} className="flex items-center text-sky-500 text-xs">
              <Icon icon="mdi:attach-file" className="pr-1 text-gray-500" />
              {file}
            </a>
          ))}
        </div>
      )}

      <div className="flex gap-2 mt-2">
        {task.tags.includes("backend") && <Capsule variant="be" />}
        {task.tags.includes("frontend") && <Capsule variant="fe" />}
        {task.tags.includes("design") && <Capsule variant="design" />}
      </div>
    </div>
  );
}