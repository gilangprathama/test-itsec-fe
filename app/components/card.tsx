import { Icon } from "@iconify/react";
import Capsule from "../components/capsule";

export default function Card() {
  return (
    <div className="p-4 rounded-lg bg-white shadow-[0_0.5px_2px_0px_rgba(16,24,40,0.3)]">
      <p className="font-semibold">Title</p>
      <p className="line-clamp-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam pulvinar enim a laoreet. Vivamus fermentum iaculis enim, eu feugiat massa consectetur ut. Quisque elementum leo vel enim congue dapibus. Nam ipsum urna, malesuada non blandit quis, suscipit a lacus. Fusce at elit sem.</p>
      <div className="columns-2 mt-2">
        <a href="#" className="flex items-center text-sky-500">
          <Icon color="grey" icon="mdi:link-variant" className="pr-1" />
          lorem ipsum
        </a>
        <a href="#" className="flex items-center items-center text-sky-500">
          <Icon color="grey" icon="mdi:attach-file" className="pr-1" />
          dolor sit amet
        </a>
      </div>
      <div className="flex gap-2 mt-2">
        <Capsule variant="be" />
        <Capsule variant="fe" />
        <Capsule variant="design" />
      </div>
    </div>
  );
}