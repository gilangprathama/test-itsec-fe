import Capsule from "../components/capsule";
import Card from "../components/card";

export default function BoardPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Hello {"{name}"}, Here's your tasks</h1>
        <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Add a task
        </button>
      </div>
      
      <div className="w-1/3">
        <Card />
      </div>
      {/* <Capsule variant="be" />
      <Capsule variant="fe" />
      <Capsule variant="design" />
      <Card /> */}
    </div>
  );
}