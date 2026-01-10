import Image from "next/image";
import { Menu } from "lucide-react";
import ChatPage from "./components/chatpage";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-screen overflow-hidden">
    {/* Header */}
      <div className="w-full flex items-center mt-3">
        <Menu className="w-6 h-6 sm:w-7 sm:h-7" />

        <h1 className="flex-1 text-center font-bold text-xl sm:text-3xl lg:text-4xl">
          Vit Questions and Answers App
        </h1>

        <div className="w-6 h-6" />
      </div>

      <h2 className="text-sm sm:text-lg text-center mt-2">
        Ask anything about courses, placements, hostels, academics
      </h2>

      {/* Logo */}
      <Image
        src="/vit.png"
        alt="VIT logo"
        width={160}
        height={160}
        className="mt-4 sm:mt-6"
      />

      {/* Chat */}
      <ChatPage />
    </div>
  );
}
