import { Icon } from "@iconify/react";

export default function SideNav() {
  return (
    <div className="p-4 top-0 left-0 bg-white h-screen fixed border-r-2 border-r-[rgba(29, 41, 57, 0.1)] z-[99] flex flex-col justify-between">
      <ul className="flex flex-col items-center">
        <li className="p-2">
          <Icon
            icon="fluent-color:number-symbol-square-32"
            className="w-7 h-7"
          />
        </li>
        <li className="p-2">
          <button
            type="button"
            className="top-2 text-gray-500 hover:text-gray-700"
          >
            <Icon
              icon="material-symbols:grid-view-outline-rounded"
              className="w-5 h-5"
            />
          </button>
        </li>
        <li className="p-2">
          <button
            type="button"
            className="top-2 text-gray-500 hover:text-gray-700"
          >
            <Icon
              icon="material-symbols:note-stack-outline-rounded"
              className="w-5 h-5"
            />
          </button>
        </li>
        <li className="p-2">
          <button
            type="button"
            className="top-2 text-gray-500 hover:text-gray-700"
          >
            <Icon
              icon="solar:chat-round-dots-linear"
              className="w-5 h-5"
            />
          </button>
        </li>
        <li className="p-2">
          <button
            type="button"
            className="top-2 text-gray-500 hover:text-gray-700"
          >
            <Icon
              icon="material-symbols:supervised-user-circle-outline"
              className="w-5 h-5"
            />
          </button>
        </li>
        <li className="p-2">
          <button
            type="button"
            className="top-2 text-gray-500 hover:text-gray-700"
          >
            <Icon
              icon="material-symbols:settings-outline-rounded"
              className="w-5 h-5"
            />
          </button>
        </li>
      </ul>

      <ul className="flex flex-col items-center">
        <li className="p-2">
          <button
            type="button"
            className="top-2 text-gray-500 hover:text-gray-700"
          >
            <Icon
              icon="mdi:login"
              className="w-5 h-5"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}