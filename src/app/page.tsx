import Image from "next/image";
import react from "react";
import { Search,Menu } from "lucide-react";
export default function Home() {
  return (
   <div className="flex flex-col items-center w-full">

  <div className="w-full flex items-center px-6 mt-2">
    <div className="flex-1">
      <Menu className="w-7 h-7 mt-3" />
    </div>

    <div className="flex-1 flex justify-center">
      <h1 className="font-bold font-sans text-4xl text-center whitespace-nowrap">
        Vit Questions and Answers App
      </h1>
    </div>

    <div className="flex-1"></div>
  </div>

  <h2 className="font-sans text-2xl text-center mt-3">
    Ask anything about courses, placements, hostels, academics
  </h2>

  <Image
    src="/vit.png"
    alt="VIT logo"
    width={200}
    height={300}
    className="bg-transparent mt-5"
  />

  <input
    type="text"
    placeholder="Ask anything"
    className="mt-5 py-3 px-4 border border-gray-400 rounded-2xl w-3/4 text-lg"
  />
</div>

  );
}
