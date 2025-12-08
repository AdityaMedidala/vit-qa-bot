import Image from "next/image";
import react from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="font-bold font-sans text-4xl">Vit Questions and Answers App</h1>
      <h2 className="font-sans text-2xl">Ask anything about courses,placments,hostels,academics</h2>
      <Image src="/vit.png" alt="VIT logo" width={200} height={300} className="bg-transparent mt-5" />
      <input type="text" placeholder="Ask anything" className="mt-5 py-3 p-2 border-gray-400 rounded-2xl w-3xl" />
    </div>
  );
}
