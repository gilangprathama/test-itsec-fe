import Navbar from "../components/navbar";
import SideNav from "../components/side-nav";

export default function BoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="hidden md:block">
        <SideNav />
      </div>
      <div className="flex flex-col w-full pt-[64px] md:pl-[78px]">
        <Navbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
