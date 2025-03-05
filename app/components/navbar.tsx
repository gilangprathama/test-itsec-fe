import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <nav className="p-4 w-full top-0 left-0 fixed bg-white border-b-2 border-b-[rgba(29, 41, 57, 0.1)] flex items-center justify-between md:justify-end
">
      <button className="md:hidden">
        <Icon icon="material-symbols:menu-rounded" className="w-7 h-7" />
      </button>
      <div className="circle"></div>
    </nav>
  );
}